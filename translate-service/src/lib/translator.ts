export class Translator {
  private _language: string;
  constructor() {
    this._language = 'en';
  }
  public get language() {
    return this._language;
  }
  public set language(language) {
    this._language = language;
  }
}
