import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from '../github/github.controller';
import { GithubService } from '../github/github.service';
import { ConfigModule } from '@nestjs/config';

describe('GithubController', () => {
  let gitHubController: GithubController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [GithubService],
      imports: [ConfigModule.forRoot()],
    }).compile();
    gitHubController = app.get<GithubController>(GithubController);
  });

  describe('GitHubController', () => {
    it('should call the controller getCommits', () => {
      expect(gitHubController.getCommits()).toBeDefined();
    });
  });
});
