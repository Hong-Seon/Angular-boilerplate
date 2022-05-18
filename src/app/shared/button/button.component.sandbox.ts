import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent)
  .add('Shared Button', {
    template: `<app-button></app-button>`
  });
