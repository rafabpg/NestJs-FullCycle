import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/teste')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste1')
  acao(): string {
    return 'acao teste';
  }
}
