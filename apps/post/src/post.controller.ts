import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePostDto } from './dto/ create-post.dto';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}
  @MessagePattern('posts.create')

  @Get()
  getFeed(@Query('page') page: string) {
    let pageNumber = Number(page);
    if (isNaN(pageNumber) || pageNumber < 1) {
      pageNumber = 1;
    }
    return this.postService.getAllFeed(pageNumber);
  }

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }
}
