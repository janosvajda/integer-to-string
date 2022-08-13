import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min, ValidateNested } from 'class-validator';

export class TranslatorEntity {
  /**
   * The integer between 0-999999 that should be translated.
   * @example 1
   */
  @ApiProperty({
    example: 1,
    description: 'The number 0-999999 that should be translated.',
  })
  @IsInt()
  @Min(0)
  @Max(10)
  data: number;
}
