import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';

export const createRandomVehicles = () => {
  const carFactory = new CarFactory();
  const bicyCleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('March');
  const bicycle = bicyCleFactory.getVehicle('bicycle');
  const vehicles = [car1, car2, bicycle];
  const randomVehicleIndex = randomNumbers(vehicles.length);
  return vehicles[randomVehicleIndex];
};
