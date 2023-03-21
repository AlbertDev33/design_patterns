import { EmailValidator } from './validation/email-validator';
import { IEmailValidator } from './validation/email-validator-protocol';

function emailValidation(emailValidator: IEmailValidator, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido');
  } else {
    console.log('Email inválido');
  }
}

const email = 'mail@mail.com';
emailValidation(new EmailValidator(), email);
