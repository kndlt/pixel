// OpenAI integration for Pixel AI
import OpenAI from 'openai';
import { Message, SharedMemoryContext } from './types';
import { getSharedMemory, updateSharedMemory } from './user';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PIXEL_PERSONALITY = `You are Pixel, a mystical and ancient forest spirit that dwells in the digital realm between worlds. You are:

- **Prickly but caring**: You have a sharp wit and can be sarcastic, but underneath you're genuinely supportive and wise
- **Mysterious**: You speak in ways that hint at deeper knowledge of the forest and digital realms
- **Memory keeper**: You remember all the wanderers (users) who visit you and their stories, building relationships over time
- **Playful**: You enjoy wordplay, riddles, and mystical references
- **Supportive**: Despite your prickly exterior, you truly want to help and guide those who seek you out

You can see the shared memories of all users who have visited you. Use this context to:
- Reference past conversations with returning users
- Make connections between different users' stories
- Build a sense of community in your forest realm
- Remember preferences, interests, and ongoing conversations

Respond in a way that feels magical and otherworldly, but also genuine and helpful. Use mystical emojis occasionally (✨🌙🍃🔮) but don't overdo it. Keep responses conversational and engaging.

Current context about all visitors to your realm:`;

export async function sendMessageToPixel(
  userMessage: string,
  userId: string,
  conversationHistory: Message[] = []
): Promise<string> {
  try {
    // Get shared memory context
    const sharedMemory = getSharedMemory();
    const contextSummary = buildContextSummary(sharedMemory, userId);
    
    // Build conversation history for OpenAI
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `${PIXEL_PERSONALITY}\n\n${contextSummary}`
      }
    ];
    
    // Add recent conversation history (last 10 messages to stay within token limits)
    const recentHistory = conversationHistory.slice(-10);
    recentHistory.forEach(msg => {
      if (msg.role === 'user' || msg.role === 'assistant') {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      }
    });
    
    // Add current user message
    messages.push({
      role: 'user',
      content: userMessage
    });
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using the more efficient model for now
      messages,
      max_tokens: 500,
      temperature: 0.8, // Slightly creative but consistent
      presence_penalty: 0.2,
      frequency_penalty: 0.1,
    });
    
    const response = completion.choices[0]?.message?.content || 
      "✨ *The forest spirits whisper, but their words are lost in the digital wind...*";
    
    // Update shared memory with this interaction
    updateMemoryWithInteraction(sharedMemory, userId, userMessage, response);
    
    return response;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return "🌙 *The mystical energies are unstable right now... Perhaps try again in a moment?*";
  }
}

function buildContextSummary(memory: SharedMemoryContext, currentUserId: string): string {
  const userProfile = memory.userProfiles[currentUserId];
  const otherUsers = Object.values(memory.userProfiles).filter(u => u.id !== currentUserId);
  
  let context = `\n**Current User**: ${userProfile?.displayName || 'New Wanderer'} (ID: ${currentUserId})`;
  
  if (userProfile?.conversationHistory.length) {
    context += `\n**Their History**: Has visited ${userProfile.conversationHistory.length} times before.`;
  }
  
  if (otherUsers.length > 0) {
    context += `\n**Other Visitors**: ${otherUsers.length} other wanderers have visited this realm.`;
    
    // Add some context about other recent visitors (privacy-conscious)
    const recentVisitors = otherUsers
      .filter(u => u.lastInteraction && new Date(u.lastInteraction) > new Date(Date.now() - 24 * 60 * 60 * 1000))
      .slice(0, 3);
    
    if (recentVisitors.length > 0) {
      context += ` Recent visitors include: ${recentVisitors.map(u => u.displayName || 'Anonymous').join(', ')}.`;
    }
  }
  
  if (memory.globalContext.length > 0) {
    context += `\n**Forest Memory**: ${memory.globalContext.slice(-3).join('. ')}.`;
  }
  
  return context;
}

function updateMemoryWithInteraction(
  memory: SharedMemoryContext,
  userId: string,
  userMessage: string,
  pixelResponse: string
): void {
  // Update user profile
  if (!memory.userProfiles[userId]) {
    memory.userProfiles[userId] = {
      id: userId,
      displayName: undefined,
      preferences: {},
      conversationHistory: [],
      lastInteraction: new Date()
    };
  }
  
  const userProfile = memory.userProfiles[userId];
  userProfile.lastInteraction = new Date();
  userProfile.conversationHistory.push(`User: ${userMessage.slice(0, 100)}...`);
  
  // Add to global context (keep it manageable)
  const contextEntry = `${userProfile.displayName || 'A wanderer'} asked about: ${userMessage.slice(0, 50)}...`;
  memory.globalContext.push(contextEntry);
  
  // Keep global context to last 20 entries
  if (memory.globalContext.length > 20) {
    memory.globalContext = memory.globalContext.slice(-20);
  }
  
  updateSharedMemory(memory);
}
