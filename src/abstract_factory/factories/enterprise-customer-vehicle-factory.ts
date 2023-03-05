import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { AbstractCustomer } from '../customer/interfaces/customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { AbstractVehicle } from '../vehicle/interfaces/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  public createCustomer(customerName: string): AbstractCustomer {
    return new EnterpriseCustomer(customerName);
  }
  public createVehicle(
    vehicleName: string,
    customerName: string,
  ): AbstractVehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
