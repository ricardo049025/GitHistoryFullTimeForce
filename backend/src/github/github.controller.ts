// src/github/github.controller.ts

import { Controller, Get, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  @HttpCode(200)
  async getCommits() {
    try {
      return await this.githubService.getCommits();  
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
    
  }
}
