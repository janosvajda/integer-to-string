import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnglishTranslator } from './lib/translators/EnglishTranslator';
import { Translator } from './lib/Translator';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, EnglishTranslator, Translator],
})
export class AppModule {}
