import { AbstractCustomer } from '../customer/interfaces/customer';
import { AbstractVehicle } from './interfaces/vehicle';

export class EnterpriseCar implements AbstractVehicle {
  constructor(
    public name: string,
    private readonly customer: AbstractCustomer,
  ) {}

  public pickUp(): void {
    console.log(`${this.name} esta buscando ${this.customer.name} ENTERPRISE`);
  }
}
