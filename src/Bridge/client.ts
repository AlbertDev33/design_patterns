import { ConsoleLogger } from './ConsoleLogger';
import { EmailNotification } from './EmailNotification';
import { FileLogger } from './FileLogger';
import { SmsNotification } from './SmsNotification';

const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();

const emailNotification = new EmailNotification(consoleLogger);
const smsNotification = new SmsNotification(fileLogger);

emailNotification.send('This is sending an email');
smsNotification.send('This is sending an SMS');
