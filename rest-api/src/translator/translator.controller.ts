import { Controller, Get, Inject, Param } from '@nestjs/common';
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
    const log = `Valid message sent to message broker: ${params.data}`;
    try {
      this.client.emit('translate.data', { data: params.data });
      console.info(log);
      return log;
    } catch (e) {
      console.warn('Error:', e);
    }
  }
}
