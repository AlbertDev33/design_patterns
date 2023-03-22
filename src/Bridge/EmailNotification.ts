import { ILogger, INotification } from './interfaces';

export class EmailNotification implements INotification {
  constructor(private readonly logger: ILogger) {}

  send(message: string): void {
    this.logger.log(`[EmailNotification] Sending email: ${message}`);
  }
}
