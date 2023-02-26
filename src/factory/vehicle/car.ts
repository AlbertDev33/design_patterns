import { Vehicle } from '../protocol';

export class Car implements Vehicle {
  constructor(private names: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.names} está buscando ${customerName}`);
  }
  stop(): void {
    console.log(`${this.names} parou.`);
  }
}
