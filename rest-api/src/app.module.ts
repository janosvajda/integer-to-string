import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslatorModule } from './translator/translator.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TranslatorModule],
})
export class AppModule {}
