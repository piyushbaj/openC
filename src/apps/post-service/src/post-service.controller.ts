import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostServiceService } from './post-service.service';
import { CreatePostDto } from './dto/ create-post.dto';

@Controller('post')
export class PostServiceController {
  constructor(private readonly postServiceService: PostServiceService) {}

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postServiceService.create(dto);
  }
}
