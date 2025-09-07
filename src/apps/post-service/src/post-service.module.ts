import { Module } from '@nestjs/common';
import { PostServiceController } from './post-service.controller';
import { PostServiceService } from './post-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema, Post } from './dto/entities/post.entity';

@Module({
  imports: [
     MongooseModule.forRoot('mongodb+srv://piyush:knitKnit@cluster0.wdg5gz0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/nest-posts', {
      dbName: 'nest-posts',  // optional, for clarity
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/cluster', {
    //   dbName: 'nest-posts',
    // }),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    PostServiceModule,
  ],
  controllers: [PostServiceController],
  providers: [PostServiceService],
})
export class PostServiceModule {}
