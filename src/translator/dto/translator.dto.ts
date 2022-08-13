import { IsString } from 'class-validator';

export class TranslatorDto {
  @IsString()
  readonly translated: string;
}
