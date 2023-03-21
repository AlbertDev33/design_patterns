import { IEmailValidator } from './email-validator-protocol';

export class EmailValidator implements IEmailValidator {
  isEmail(value: string): boolean {
    return /@/.test(value);
  }
}
