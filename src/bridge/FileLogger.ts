import { ILogger } from './interfaces';

export class FileLogger implements ILogger {
  log(message: string): void {
    console.log(`[FileLogger] ${message}`);
  }
}
