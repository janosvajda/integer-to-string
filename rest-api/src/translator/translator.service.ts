import { Injectable } from '@nestjs/common';
import { TranslatorEntity } from './dto/translator.entity';

@Injectable()
export class TranslatorService {
  private readonly result: TranslatorEntity[] = [];

  translate(data: number): TranslatorEntity {
    return this.result[data];
  }
}
