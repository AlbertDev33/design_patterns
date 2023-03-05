import { AbstractCustomer } from '../customer/interfaces/customer';
import { AbstractVehicle } from './interfaces/vehicle';

export class IndividualCar implements AbstractVehicle {
  constructor(
    public name: string,
    private readonly customer: AbstractCustomer,
  ) {}

  public pickUp(): void {
    console.log(`${this.name} esta buscando ${this.customer.name} INDIVIDUAL`);
  }
}
