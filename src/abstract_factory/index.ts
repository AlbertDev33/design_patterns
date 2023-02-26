export class AbstractFactory {
  myMethod() {
    console.log('teste');
  }
}

const n = new AbstractFactory();
n.myMethod();
