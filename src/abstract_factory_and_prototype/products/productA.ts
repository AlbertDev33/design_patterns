import { Prototype } from '../interfaces/prototype';

export class ProductA implements Prototype {
  constructor(private readonly id: number, private name: string) {}

  clone(): ProductA {
    return new ProductA(this.id, this.name);
  }
}
