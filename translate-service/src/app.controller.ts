import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('translate.data')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response =
      `Receiving a new message that should be processed: ` +
      JSON.stringify(originalMessage.value);
    this.appService.translate(JSON.stringify(originalMessage.value));
    return response;
  }

  getHello() {
    return undefined;
  }
}
