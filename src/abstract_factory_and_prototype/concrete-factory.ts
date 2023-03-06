import { AbstractFactory } from './interfaces/abstract-factory';
import { ProductA } from './products/productA';
import { ProductB } from './products/productB';

export class ConcreteFactory implements AbstractFactory {
  constructor(
    private prototypeProductA: ProductA,
    private prototypeProductB: ProductB,
  ) {}

  createProductA(): ProductA {
    return this.prototypeProductA.clone();
  }
  createProductB(): ProductB {
    return this.prototypeProductB.clone();
  }
}
