import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { FLOWER_REPO } from './flowers.repository';
import { FlowersRepoImpl } from './flowersRepo.impl';

@Module({
  controllers: [FlowersController],
  providers: [
    FlowersService,
    { provide: FLOWER_REPO, useClass: FlowersRepoImpl },
  ],
})
export class FlowersModule {}
