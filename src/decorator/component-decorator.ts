import { ComponentProtocol } from './component-protocol';

export interface ComponentDecorator extends ComponentProtocol {
  component: ComponentProtocol;
}
