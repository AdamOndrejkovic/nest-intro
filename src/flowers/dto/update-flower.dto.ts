import { PartialType } from '@nestjs/mapped-types';
import { CreateFlowerDto } from './create-flower.dto';

export class UpdateFlowerDto extends PartialType(CreateFlowerDto) {
  name: string;
  price: string;
}
