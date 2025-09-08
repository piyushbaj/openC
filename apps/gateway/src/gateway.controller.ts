import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';

@Controller()
export class GatewayController {
  constructor(
    @Inject('AUTH_CLIENT') private readonly auth: ClientProxy,
    @Inject('POST_CLIENT') private readonly post: ClientProxy,
  ) {}

  @Get('/health')
  health() { return { ok: true }; }

  @Post('/posts')
  async createPost(
    @Body() dto: { title: string; body: string },
    @Headers('authorization') token?: string,
  ) {
    // const user = await firstValueFrom(
    //   this.auth.send('auth.validate', token ?? '').pipe(timeout(3000))
    // );

    const created = await firstValueFrom(
      this.post.send('posts.create', { ...dto,  })
    );

    return created;
  }
  @Get('/getPosts')
   async getPost(
    @Query() page
   ) {
    // const user = await firstValueFrom(
    //   this.auth.send('auth.validate', token ?? '').pipe(timeout(3000))
    // );

    const created = await firstValueFrom(
      this.post.send('posts.create', { page,  })
    );
    return created;
  }
}
