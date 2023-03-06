import { Prototype } from '../interfaces/prototype';

export class ProductB implements Prototype {
  constructor(private readonly id: number, private description: string) {}

  clone(): ProductB {
    return new ProductB(this.id, this.description);
  }
}
