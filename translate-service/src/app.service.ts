import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  translate(data: string): string {
    return 'Translator microservice.';
  }
}
