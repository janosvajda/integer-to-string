import { Injectable } from '@nestjs/common';
import { Translator } from './lib/Translator';

@Injectable()
export class AppService {
  private _translator = new Translator();
  translate(data: string): string {
    console.info(`AppService data: ${data}`);
    return this._translator.translate(data);
  }
}
