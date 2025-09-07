import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostServiceService } from './post-service.service';
import { CreatePostDto } from './dto/ create-post.dto';

@Controller('post')
export class PostServiceController {
  constructor(private readonly postServiceService: PostServiceService) {}

  @Get()
  getFeed(@Query('page') page: string) {
    let pageNumber = Number(page);
    if (isNaN(pageNumber) || pageNumber < 1) {
      pageNumber = 1;
    }
    return this.postServiceService.getAllFeed(pageNumber);
  }

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postServiceService.create(dto);
  }
}
 