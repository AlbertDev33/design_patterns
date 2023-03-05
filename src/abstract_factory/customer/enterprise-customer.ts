import { AbstractCustomer } from './interfaces/customer';

export class EnterpriseCustomer implements AbstractCustomer {
  constructor(public name: string) {}
}
