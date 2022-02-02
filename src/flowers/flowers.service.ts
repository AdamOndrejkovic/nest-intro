import { Inject, Injectable } from '@nestjs/common';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { FLOWER_REPO, FlowersRepository } from './flowers.repository';

@Injectable()
export class FlowersService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject(FLOWER_REPO) flowerRepo: FlowersRepository) {}

  create(createFlowerDto: CreateFlowerDto) {
    return 'This action adds a new flower';
  }

  findAll() {
    return `This action returns all flowers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flower`;
  }

  update(id: number, updateFlowerDto: UpdateFlowerDto) {
    return `This action updates a #${id} flower`;
  }

  remove(id: number) {
    return `This action removes a #${id} flower`;
  }
}
