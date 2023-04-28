import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uf-child-to-parent-access',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      child-to-parent-access works!
    </p>
  `,
  styles: [
  ]
})
export class ChildToParentAccessComponent {

}
