// User management utilities with localStorage
import { nanoid } from 'nanoid';
import { User, SharedMemoryContext, UserProfile } from './types';

const USER_STORAGE_KEY = 'pixel_user_id';
const SHARED_MEMORY_KEY = 'pixel_shared_memory';

export function generateUserId(): string {
  return `user_${nanoid(12)}`;
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const userId = localStorage.getItem(USER_STORAGE_KEY);
    if (!userId) return null;
    
    const sharedMemory = getSharedMemory();
    const userProfile = sharedMemory.userProfiles[userId];
    
    if (userProfile) {
      return {
        id: userId,
        displayName: userProfile.displayName,
        createdAt: new Date(userProfile.lastInteraction),
        lastActiveAt: new Date(),
        deviceInfo: navigator.userAgent
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export function createUser(displayName?: string): User {
  const userId = generateUserId();
  const now = new Date();
  
  const user: User = {
    id: userId,
    displayName: displayName || `Wanderer`,
    createdAt: now,
    lastActiveAt: now,
    deviceInfo: typeof window !== 'undefined' ? navigator.userAgent : undefined
  };
  
  // Store user ID in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_STORAGE_KEY, userId);
    
    // Add user to shared memory
    const sharedMemory = getSharedMemory();
    sharedMemory.userProfiles[userId] = {
      id: userId,
      displayName: user.displayName,
      preferences: {},
      conversationHistory: [],
      lastInteraction: now
    };
    updateSharedMemory(sharedMemory);
  }
  
  return user;
}

export function getSharedMemory(): SharedMemoryContext {
  if (typeof window === 'undefined') {
    return {
      userProfiles: {},
      globalContext: [],
      relationships: {},
      lastUpdated: new Date()
    };
  }
  
  try {
    const stored = localStorage.getItem(SHARED_MEMORY_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert date strings back to Date objects
      parsed.lastUpdated = new Date(parsed.lastUpdated);
      Object.values(parsed.userProfiles).forEach((profile: any) => {
        profile.lastInteraction = new Date(profile.lastInteraction);
      });
      return parsed;
    }
  } catch (error) {
    console.error('Error reading shared memory:', error);
  }
  
  return {
    userProfiles: {},
    globalContext: [],
    relationships: {},
    lastUpdated: new Date()
  };
}

export function updateSharedMemory(memory: SharedMemoryContext): void {
  if (typeof window === 'undefined') return;
  
  try {
    memory.lastUpdated = new Date();
    localStorage.setItem(SHARED_MEMORY_KEY, JSON.stringify(memory));
  } catch (error) {
    console.error('Error updating shared memory:', error);
  }
}

export function updateUserActivity(userId: string): void {
  const sharedMemory = getSharedMemory();
  if (sharedMemory.userProfiles[userId]) {
    sharedMemory.userProfiles[userId].lastInteraction = new Date();
    updateSharedMemory(sharedMemory);
  }
}
