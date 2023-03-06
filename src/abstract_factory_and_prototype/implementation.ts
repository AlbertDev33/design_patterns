import { ConcreteFactory } from './concrete-factory';
import { ProductA } from './products/productA';
import { ProductB } from './products/productB';

const prototypeProductA = new ProductA(1, 'Prototype ProductA');
const prototypeProductB = new ProductB(10, 'Prototype ProductB');
const factory = new ConcreteFactory(prototypeProductA, prototypeProductB);

const productA = factory.createProductA();
console.log(productA);

const productB = factory.createProductB();
console.log(productB);
