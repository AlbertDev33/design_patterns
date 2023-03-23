import { ILogger, INotification } from './interfaces';

export class SmsNotification implements INotification {
  constructor(private readonly logger: ILogger) {}

  send(message: string): void {
    this.logger.log(`[SmsNotification] Sending SMS: ${message}`);
  }
}
