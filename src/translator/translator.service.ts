import { Injectable } from '@nestjs/common';
import { TranslatorEntity } from './dto/translator.entity';
import { TranslatorDto } from './dto/translator.dto';

@Injectable()
export class TranslatorService {
  private readonly result: TranslatorEntity[] = [];

  create(converter: TranslatorDto): TranslatorEntity {
    this.result.push(converter);
    return converter;
  }

  translate(data: any | undefined): TranslatorEntity {
    return this.result[data];
  }
}
