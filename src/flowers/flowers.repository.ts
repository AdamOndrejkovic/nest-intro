import { Flower } from './entities/flower.entity';

export const FLOWER_REPO = 'FLOWER_REPO';

export interface FlowersRepository {
  create(name: string): Flower;
}
