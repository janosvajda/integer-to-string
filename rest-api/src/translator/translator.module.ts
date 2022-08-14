import { Module } from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { TranslatorController } from './translator.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [TranslatorService],
  controllers: [TranslatorController],
  imports: [
    ClientsModule.register([
      {
        name: 'any_name_i_want',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'any_client_id_i_want',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'an_unique_string_id',
          },
        },
      },
    ]),
  ],
})
export class TranslatorModule {}
