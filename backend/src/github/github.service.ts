// src/github/github.service.ts

import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { CommitDto } from 'src/dtos/commit.dto';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;

  private readonly owner: string = process.env.GITHUB_OWNER;
  private readonly repo: string = process.env.GITHUB_REPO;

  constructor() {
    this.octokit = new Octokit({ auth: process.env.TOKEN });
  }

  async getCommits(): Promise<any[]> {
    const response = await this.octokit.repos.listCommits({
      owner: this.owner,
      repo: this.repo,
    });

    const commits: CommitDto[] = response.data.map((commit) => ({
      sha: commit.sha,
      author: commit.commit.author.name,
      email: commit.commit.author.email,
      date: commit.commit.author.date,
      message: commit.commit.message,
    }));
    return commits;
  }
}
