import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/ create-post.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './dto/entities/post.entity';


@Injectable()
export class PostServiceService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) { }

  private posts = [];

  findAll() {
    return this.posts;
  }

  create(dto: CreatePostDto) {
    return this.postModel.create(dto)
  }
}
