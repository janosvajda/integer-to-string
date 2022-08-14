import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetTranslatorDto } from './dto/get-translator.dto';
import { TranslatorService } from './translator.service';

@Controller('translator')
@ApiTags('translator')
export class TranslatorController {
  constructor(private readonly converterService: TranslatorService) {}
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
  findOne(@Param() params: GetTranslatorDto) {
    return `Valid: ${params.data}`;
  }
}
