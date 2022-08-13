import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TranslatorDto } from './dto/translator.dto';
import { TranslatorEntity } from './dto/translator.entity';
import { TranslatorService } from './translator.service';

@Controller('translator')
@ApiTags('translator')
export class TranslatorController {
  constructor(private readonly converterService: TranslatorService) {}

  @Get('/:number')
  @ApiParam({
    name: 'number',
    required: true,
    description: 'The number that should be translated.',
    schema: { oneOf: [{ type: 'integer' }] },
    type: 'integer',
  })
  @ApiOperation({ summary: 'Translate number' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getTranslate(
    @Param('number')
    @Param()
    translatorDto: TranslatorDto,
  ): Promise<TranslatorEntity> {
    return this.converterService.create(translatorDto);
  }
}
