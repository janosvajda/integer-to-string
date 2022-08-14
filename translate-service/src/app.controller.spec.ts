import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaContext } from '@nestjs/microservices';
import {
  Consumer,
  KafkaMessage,
} from '@nestjs/microservices/external/kafka.interface';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', async () => {
    jest.mocked(KafkaContext);
    const context = new KafkaContext(null);
    it('should return "Translator microservice."', async () => {
      const c = await appController.readMessage('1', context);
      expect(c).toBe('one');
    });
  });
});
