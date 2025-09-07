import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  body: string;

  @Prop({ required: true })
  authorId: number;

  // New field: impressions (default 0)
  @Prop({ type: Number, default: 0 })
  impressions: number;

  // New field: userId (ObjectId reference to User collection)
  // @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  // userId: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);