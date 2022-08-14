import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { Translator } from './lib/Translator';

@Controller()
export class AppController {
  private translator: Translator;
  constructor(private readonly appService: AppService) {
    this.translator = new Translator();
  }
  @MessagePattern('translate.data')
  async readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    try {
      const data = await context.getMessage().value;
      return this.translator.translate(String(data));
    } catch (e) {
      console.warn('Error: translate.data readMessage', e);
      return e.toString();
    }
  }
}
