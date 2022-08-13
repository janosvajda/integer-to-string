import { ApiProperty } from '@nestjs/swagger';

export class TranslatorEntity {
  @ApiProperty({
    example: 'hundred-twenty',
    description: 'The number that should be translated',
  })
  translated: string;
}
