#!/usr/bin/env node

// Test script for Pixel AI integration
import { sendMessageToPixel } from '../lib/openai.js';

async function testPixelAI() {
  console.log('🌲 Testing Pixel AI integration...\n');
  
  const testUserId = 'test_user_123';
  const testMessage = 'Hello Pixel, I am testing our connection to the digital forest.';
  
  try {
    console.log(`📤 Sending message: "${testMessage}"`);
    const response = await sendMessageToPixel(testMessage, testUserId, []);
    console.log(`📥 Pixel responds: "${response}"`);
    console.log('\n✅ Test successful! Pixel is responding.');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

testPixelAI();
