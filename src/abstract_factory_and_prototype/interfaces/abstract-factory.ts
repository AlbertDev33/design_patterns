import { ProductA } from '../products/productA';
import { ProductB } from '../products/productB';

export interface AbstractFactory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}
