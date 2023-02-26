import { Vehicle } from '../protocol';

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou.`);
  }
}