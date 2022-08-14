import { EnglishTranslator } from './languages/EnglishTranslator';

export class Translator {
  private _language: string;
  private _translator: EnglishTranslator;
  constructor() {
    this._language = 'en';
    this.loadTranslator();
  }
  public get language() {
    return this._language;
  }
  public set language(language) {
    this._language = language;
  }

  private loadTranslator() {
    this._translator = new EnglishTranslator();
  }

  translate(data: string) {
    return this._translator.translate(data);
  }
}
