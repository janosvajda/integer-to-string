import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  const config = new DocumentBuilder()
    .setTitle('Converter API.')
    .setDescription('REST API of convertions.')
    .setVersion('1.0')
    .addTag('translator')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
  console.info(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
