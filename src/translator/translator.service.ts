import { Injectable } from '@nestjs/common';
import { TranslatorEntity } from './dto/translator.entity';
import { GetTranslatorDto } from './dto/get-translator.dto';

@Injectable()
export class TranslatorService {
  private readonly result: TranslatorEntity[] = [];

  translate(data: number): TranslatorEntity {
    console.log('FASZ', data);
    return this.result[data];
  }

  ssss(data: number): TranslatorEntity {
    console.log(data);
    return this.result[data];
  }
}
