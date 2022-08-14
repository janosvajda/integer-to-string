import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslatorModule } from './translator/translator.module';
import { ConfigModule } from '@nestjs/config';

const serviceConfig = {
  clientConfig: {
    clientId: process.env.KAFKA_INSTANCE_NAME, // consumer client id
    brokers: [process.env.KAFKA_HOST], // kafka broker address
  },
  consumerConfig: { groupId: process.env.KAFKA_GROUP }, // consumer group id
};

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TranslatorModule
  ],
})
export class AppModule {}
