import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema, Post } from './dto/entities/post.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://piyush:knitKnit@cluster0.wdg5gz0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/nest-posts', {
      dbName: 'nest-posts',  // optional, for clarity
    }),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    // PostServiceModule,
    
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
