import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PostModule, {
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 4002 },
  });
  await app.listen();
}

bootstrap();
