'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message, User, ChatState, ParticleState } from '@/lib/types';
import { getCurrentUser, createUser, updateUserActivity } from '@/lib/user';
import { nanoid } from 'nanoid';
import ParticleSystem from './ParticleSystem';
import Footer from './Footer';

export default function ChatInterface() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    currentUser: null,
  });
  const [particleState, setParticleState] = useState<ParticleState>({
    thinking: false,
    responding: false,
    idle: true,
  });
  const [input, setInput] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize user on component mount
  useEffect(() => {
    const initializeUser = () => {
      let user = getCurrentUser();
      if (!user) {
        user = createUser();
        // Add welcome message
        const welcomeMessage: Message = {
          id: nanoid(),
          userId: 'pixel',
          content: '✨ *The digital forest stirs as a new presence enters...*\n\nWell, well... another wanderer finds their way to my realm. I am Pixel, keeper of memories and secrets in this space between worlds. \n\nWhat brings you to seek me out, traveler? 🌙',
          role: 'system',
          timestamp: new Date(),
        };
        setChatState(prev => ({
          ...prev,
          currentUser: user,
          messages: [welcomeMessage]
        }));
      } else {
        // Returning user
        updateUserActivity(user.id);
        const returnMessage: Message = {
          id: nanoid(),
          userId: 'pixel',
          content: `🍃 *The forest remembers your essence...*\n\nAh, ${user.displayName || 'familiar wanderer'}, you return to my realm. The digital winds whispered of your approach. What stories shall we weave today?`,
          role: 'system',
          timestamp: new Date(),
        };
        setChatState(prev => ({
          ...prev,
          currentUser: user,
          messages: [returnMessage]
        }));
      }
      setIsInitialized(true);
    };

    initializeUser();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatState.messages]);

  // Auto-focus input when not loading
  useEffect(() => {
    if (!chatState.isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatState.isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || chatState.isLoading || !chatState.currentUser) return;

    const userMessage: Message = {
      id: nanoid(),
      userId: chatState.currentUser.id,
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    // Add user message and set loading state
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    setParticleState({ thinking: true, responding: false, idle: false });
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          userId: chatState.currentUser.id,
          conversationHistory: chatState.messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      setParticleState({ thinking: false, responding: true, idle: false });
      
      // Simulate typing delay for more natural feel
      setTimeout(() => {
        setChatState(prev => ({
          ...prev,
          messages: [...prev.messages, data.message],
          isLoading: false,
        }));
        
        setTimeout(() => {
          setParticleState({ thinking: false, responding: false, idle: true });
        }, 1000);
      }, 800);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: nanoid(),
        userId: 'pixel',
        content: '🌙 *The mystical energies falter...* \n\nSomething went awry in the digital ether. Perhaps try your words again?',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
      
      setParticleState({ thinking: false, responding: false, idle: true });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const formatTimestamp = (timestamp: Date | string) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-800 flex items-center justify-center">
        <div className="text-amber-300 text-center">
          <div className="text-2xl mb-4">✨</div>
          <div className="font-mono">Awakening the forest spirits...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-800 flex flex-col overflow-hidden">
      {/* Particle System Background */}
      <div className="fixed inset-0 z-0">
        <ParticleSystem state={particleState} />
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col relative z-10 p-4 pb-0">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6"
        >
          <h1 className="text-3xl font-serif text-amber-300 mb-2">Pixel</h1>
          <p className="text-green-300 font-mono text-sm opacity-75">
            ~ spirit of the digital forest ~
          </p>
        </motion.div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent px-2">
          <div className="max-w-4xl mx-auto space-y-4 pb-4">
            <AnimatePresence>
              {chatState.messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-lg font-mono text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-green-800/40 text-green-100 border border-green-600/30'
                        : message.role === 'system'
                        ? 'bg-purple-900/30 text-purple-200 border border-purple-600/30'
                        : 'bg-amber-900/20 text-amber-100 border border-amber-600/30'
                    }`}
                  >
                    {message.role === 'user' && (
                      <div className="text-green-400 mb-1 text-xs opacity-75">
                        &gt; {chatState.currentUser?.displayName || 'wanderer'}
                      </div>
                    )}
                    {message.role === 'assistant' && (
                      <div className="text-amber-400 mb-1 text-xs opacity-75">
                        ✨ Pixel:
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">
                      {formatMessage(message.content)}
                    </div>
                    <div className="text-xs opacity-50 mt-2">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Loading indicator */}
            {chatState.isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-amber-900/20 border border-amber-600/30 p-4 rounded-lg">
                  <div className="text-amber-400 mb-1 text-xs opacity-75">
                    ✨ Pixel:
                  </div>
                  <div className="flex items-center space-x-1 text-amber-300">
                    <span className="font-mono text-sm">
                      {particleState.thinking ? 'weaving thoughts through the ether' : 'channeling response'}
                    </span>
                    <div className="flex space-x-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="w-1 h-1 bg-amber-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 border-t border-green-600/30 bg-slate-900/50 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto flex items-center space-x-3">
            <div className="text-green-400 font-mono text-lg flex-shrink-0">
              &gt;
            </div>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={chatState.isLoading}
              placeholder="speak to the forest spirit..."
              className="flex-1 bg-transparent border-none outline-none text-green-100 font-mono placeholder-green-400/50 text-base"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              disabled={chatState.isLoading || !input.trim()}
              className="px-4 py-2 bg-amber-600/20 border border-amber-600/40 rounded text-amber-300 font-mono text-sm hover:bg-amber-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
