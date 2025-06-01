// API route for chat messages
import { NextRequest, NextResponse } from 'next/server';
import { sendMessageToPixel } from '@/lib/openai';
import { Message } from '@/lib/types';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  try {
    const { message, userId, conversationHistory } = await request.json();
    
    if (!message || !userId) {
      return NextResponse.json(
        { error: 'Message and userId are required' },
        { status: 400 }
      );
    }
    
    const response = await sendMessageToPixel(message, userId, conversationHistory || []);
    
    const responseMessage: Message = {
      id: nanoid(),
      userId: 'pixel',
      content: response,
      role: 'assistant',
      timestamp: new Date(),
    };
    
    return NextResponse.json({
      message: responseMessage,
      success: true
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
