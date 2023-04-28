import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UseRefDirective } from '../directives/use-ref.directive';

@Component({
  selector: 'uf-template-as-variable',
  standalone: true,
  imports: [MatButtonModule, UseRefDirective],
  template: `
    <div class="button-row">
      <button #button="ufUseRef" ufUseRef mat-button (click)="testClick(button)">
        Basic
      </button>
    </div>
  `,
  styles: [
  ]
})
export class TemplateVariableAsComponent {

  testClick(test: any) {
    console.log(test);
  }

}
