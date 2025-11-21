import mongoose, { Schema, Model } from 'mongoose';

export interface IComment {
  pageId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    pageId: {
      type: String,
      required: [true, 'Page ID is required'],
      enum: [
        'soft-artistic',
        'bold-typography',
        'gallery-focus',
        'contemporary-professional',
        'architectural-grid',
        'immersive-scroll',
        'series',
        'style-guide',
        'home'
      ],
    },
    text: {
      type: String,
      required: [true, 'Comment text is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;
