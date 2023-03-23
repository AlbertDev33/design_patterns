class Engine {
  constructor(public horsepower: number) {}

  start() {
    console.log(`Engine started! The horsepower is ${this.horsepower}cv`);
  }
}

class Car {
  private engine: Engine;

  constructor(public make: string, public model: string, horsepower: number) {
    this.engine = new Engine(horsepower);
  }

  start() {
    this.engine.start();
    console.log(`${this.make} ${this.model} started!`);
  }
}

const myCar = new Car('Honda', 'Civic', 200);
myCar.start();
