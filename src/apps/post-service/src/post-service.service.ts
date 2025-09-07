import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
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

  async getAllFeed(page: number = 1) {
    let limit = 10;
    //requirement 
    /**
     * impression -> 10K high , visibility high 
     * hasSeen -> true, (!false)return -> (if folled connection activity, like comment)false
     * feed 
    */
    const skip = (page - 1) * limit;
    const [posts, total] = await Promise.all([
      this.postModel.find().skip(skip).limit(limit).exec(),
      this.postModel.countDocuments().exec(),
    ]);
    return {
      data: posts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
