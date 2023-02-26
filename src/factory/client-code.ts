import { createRandomVehicles } from './main/createRandomVehicles';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Ana', 'Joana', 'Helena', 'Maria'];

for (let i = 0; i < 10; i++) {
  const vehicle = createRandomVehicles();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
