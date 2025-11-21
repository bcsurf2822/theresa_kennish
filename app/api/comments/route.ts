import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Comment from '@/models/Comment';

export async function GET() {
  try {
    await dbConnect();
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: comments });
  } catch (error) {
    console.error('[api/comments-GET] Error fetching comments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const { pageId, text } = body;

    if (!pageId || !text) {
      return NextResponse.json(
        { success: false, error: 'pageId and text are required' },
        { status: 400 }
      );
    }

    const comment = await Comment.create({ pageId, text });
    return NextResponse.json({ success: true, data: comment }, { status: 201 });
  } catch (error) {
    console.error('[api/comments-POST] Error creating comment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
