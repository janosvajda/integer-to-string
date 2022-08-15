import { EnglishTranslator } from './translators/EnglishTranslator';
import { SupportedLanguages } from './SupportedLanguages';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class Translator {
  private _language: string;
  private _translator: EnglishTranslator;

  constructor(
    @Inject(EnglishTranslator) private englishTranslator: EnglishTranslator,
  ) {
    this._language = SupportedLanguages.en;
    this.loadTranslator(this._language);
  }

  public get language() {
    return this._language;
  }

  /**
   * @param language String
   */
  public set language(language) {
    if (!(<any>Object).values(SupportedLanguages).includes(language)) {
      throw new Error('Language is not supported.');
    }
    this._language = language;
  }

  /**
   * @param language String
   */
  public loadTranslator(language: string) {
    switch (language) {
      default:
        this._translator = new EnglishTranslator();
        break;
    }
  }

  /**
   * @param data String
   */
  translate(data: string) {
    const translated = this._translator.translate(data);
    return translated;
  }
}
