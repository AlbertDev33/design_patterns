import { AbstractCustomer } from '../customer/interfaces/customer';
import { AbstractVehicle } from '../vehicle/interfaces/vehicle';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): AbstractCustomer;
  createVehicle(vehicleName: string, customerName: string): AbstractVehicle;
}
