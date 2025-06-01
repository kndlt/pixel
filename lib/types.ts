// Core type definitions for Pixel AI Chat Interface

export interface User {
  id: string;
  displayName?: string;
  createdAt: Date;
  lastActiveAt: Date;
  deviceInfo?: string;
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date;
  metadata?: any;
}

export interface Conversation {
  userId: string;
  messages: Message[];
  context: SharedMemoryContext;
}

export interface UserProfile {
  id: string;
  displayName?: string;
  preferences: Record<string, any>;
  conversationHistory: string[];
  personality?: string;
  lastInteraction: Date;
}

export interface SharedMemoryContext {
  userProfiles: Record<string, UserProfile>;
  globalContext: string[];
  relationships: Record<string, string[]>;
  lastUpdated: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  currentUser: User | null;
  conversationId?: string;
}

export interface ParticleState {
  thinking: boolean;
  responding: boolean;
  idle: boolean;
}
