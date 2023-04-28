import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uf-template-as-variable',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      template-as-variable works!
    </p>
  `,
  styles: [
  ]
})
export class TemplateVariableAsComponent {

}
