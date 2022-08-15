import { Inject, Injectable } from '@nestjs/common';
import { Translator } from './lib/Translator';
import { EnglishTranslator } from './lib/translators/EnglishTranslator';

@Injectable()
export class AppService {
  constructor(@Inject(EnglishTranslator) private translator: Translator) {
    this.translator = translator;
  }
  translate(data: string): string {
    console.info(`AppService data: ${data}`);
    return this.translator.translate(data);
  }
}
