import { EnglishTranslator } from './translators/EnglishTranslator';
import { SupportedLanguages } from './SupportedLanguages';

export class Translator {
  private _language: string;
  private _translator: EnglishTranslator;

  constructor() {
    this._language = SupportedLanguages.en;
    this.loadTranslator(this._language);
  }

  public get language() {
    return this._language;
  }

  /**
   * @param language
   */
  public set language(language) {
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
