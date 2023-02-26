import { Vehicle } from '../protocol';
import { Bicycle } from '../vehicle/bicycle';
import { VehicleFactory } from './vehicle-factory';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
