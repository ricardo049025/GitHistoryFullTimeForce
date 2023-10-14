// src/github/github.service.ts

import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;

  private readonly owner: string = process.env.GITHUB_OWNER;
  private readonly repo: string = process.env.GITHUB_REPO;

  constructor() {
    this.octokit = new Octokit({ auth: process.env.TOKEN })
  }

  async getCommits(): Promise<any[]> {
      const response = await this.octokit.repos.listCommits({
        owner: this.owner,
        repo: this.repo,
      });
      return response.data;
  }
}
