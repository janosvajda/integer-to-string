import { Controller, Get, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetTranslatorDto } from './dto/get-translator.dto';
import { TranslatorService } from './translator.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller('translator')
@ApiTags('translator')
export class TranslatorController {
  constructor(
    private readonly converterService: TranslatorService,
    @Inject('any_name_i_want') private readonly client: ClientKafka,
  ) {}

  async onModuleInit() {
    ['translate.data'].forEach((key) =>
      this.client.subscribeToResponseOf(`${key}`),
    );
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  @Get(':data')
  @ApiParam({
    name: 'data',
    required: true,
    description: 'The number that should be translated.',
    schema: { oneOf: [{ type: 'integer' }] },
    type: 'integer',
  })
  @ApiOperation({ summary: 'Translate number' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  translate(@Param() params: GetTranslatorDto) {
    try {
      const log = `Valid message sent to message broker: ${params.data}`;
      console.info('Message sent to transaltor service: ', log);
      const response = this.client.send('translate.data', params.data);
      if (!response) {
        console.warn('Error during translation', response);
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
      return response;
    } catch (e) {
      console.warn('Error:', e);
    }
  }
}
