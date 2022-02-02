import { FlowersRepository } from './flowers.repository';
import { Flower } from './entities/flower.entity';

export class FlowersRepoImpl implements FlowersRepository {
  create(name: string): Flower {
    return { id: 1, name: 'Red Roses', price: '15' };
  }
}
