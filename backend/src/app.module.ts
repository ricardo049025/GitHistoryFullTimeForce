import { Module } from '@nestjs/common';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
