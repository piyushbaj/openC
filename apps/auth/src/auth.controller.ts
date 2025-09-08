import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthController {
  @MessagePattern('auth.validate')
  validate(@Payload() token: string) {
    // TODO: verify token and return user
    if (token === 'valid') return { id: 'u1', name: 'Piyush' };
    throw new Error('Invalid token');
  }
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
