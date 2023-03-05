import { IndividualCustomer } from '../customer/individual-customer';
import { AbstractCustomer } from '../customer/interfaces/customer';
import { IndividualCar } from '../vehicle/individual-car';
import { AbstractVehicle } from '../vehicle/interfaces/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle';

export class IndividualCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  public createCustomer(customerName: string): AbstractCustomer {
    return new IndividualCustomer(customerName);
  }
  public createVehicle(
    vehicleName: string,
    customerName: string,
  ): AbstractVehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
