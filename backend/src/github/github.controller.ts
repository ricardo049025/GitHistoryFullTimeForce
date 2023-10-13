// src/github/github.controller.ts

import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  async getCommits() {
    return await this.githubService.getCommits();
  }
}
