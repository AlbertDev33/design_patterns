export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);
person1.addAddress(address);

const person2 = person1.clone();
person2.name = 'Joana';
console.log(person2);
console.log(person2.addresses);
