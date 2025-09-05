import { NestFactory } from '@nestjs/core';
import { PostServiceModule } from './post-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(PostServiceModule);
  // enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // strip properties that don’t have decorators
    forbidNonWhitelisted: true, // throw error if extra props
    transform: true,        // auto-transform payloads to DTO classes
  }));
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
