import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from '../github/github.controller';
import { GithubService } from '../github/github.service';
import { HttpException, HttpStatus } from '@nestjs/common';

jest.mock('../github/github.service');

describe('GithubController', () => {
  let githubController: GithubController;
  let githubService: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [GithubService],
    }).compile();

    githubController = module.get<GithubController>(GithubController);
    githubService = module.get<GithubService>(GithubService);
  });

  describe('getCommits', () => {
    it('should call getCommits from GithubService and return its result', async () => {
      const mockCommits = ['commit1', 'commit2'];
      jest.spyOn(githubService, 'getCommits').mockResolvedValue(mockCommits);

      const result = await githubController.getCommits();

      expect(result).toBe(mockCommits);
      expect(githubService.getCommits).toHaveBeenCalled();
    });

    it('should throw HttpException if GithubService throws an error', async () => {
      const errorMessage = 'Error fetching commits';
      const errorStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      jest.spyOn(githubService, 'getCommits').mockRejectedValue({
        message: errorMessage,
        status: errorStatus,
      });

      await expect(githubController.getCommits()).rejects.toThrowError(
        new HttpException(errorMessage, errorStatus),
      );
    });
  });
});
