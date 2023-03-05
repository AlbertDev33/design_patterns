import { AbstractCustomer } from './interfaces/customer';

export class IndividualCustomer implements AbstractCustomer {
  constructor(public name: string) {}
}
