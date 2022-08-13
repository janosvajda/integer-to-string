import { IsNumber, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTranslatorDto {
  @IsNumber()
  @Min(0)
  @Max(999999)
  @Type(() => Number)
  data: number;
}
