import { ManagementClient, User } from 'auth0';
import * as express from 'express';

import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('secret')
  @UseGuards(AuthGuard('jwt'))
  secretEndpoint(@Request() req: express.Request): string {
    return 'this endpoint should be protected';
  }
}
