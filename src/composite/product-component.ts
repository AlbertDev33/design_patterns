/* eslint-disable @typescript-eslint/no-empty-function */

// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
  getChild(): ProductComponent[] {
    return [];
  }
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...product: ProductComponent[]): void {
    product.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}

// Client
const pen = new ProductLeaf('Caneta', 1);
const smartPhone = new ProductLeaf('SmartPhone', 1_000);
const tShirt = new ProductLeaf('Camiseta', 50);
const productBox = new ProductComposite();
productBox.add(pen, smartPhone, tShirt);
console.log(productBox);
