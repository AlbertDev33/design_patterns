import { ComponentProtocol } from './component-protocol';

export class TextView implements ComponentProtocol {
  draw(): void {
    console.log('This is the TextView class');
  }
}
