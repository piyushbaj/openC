import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/ create-post.dto';

@Injectable()
export class PostServiceService {
  private posts = [];

  findAll() {
    return this.posts;
  }

  create(dto: CreatePostDto) {
    const newPost = { id: Date.now(), ...dto };
    this.posts.push(newPost);
    return newPost;
  }
}
