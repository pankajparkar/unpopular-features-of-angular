import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'uf-dashboard',
  standalone: true,
  imports: [
    MatListModule,
    NgFor,
    RouterLink,
  ],
  template: `
    <h1>All examples</h1>
    <mat-list>
      <mat-list-item *ngFor="let item of items" [routerLink]="'/'+ item.path">
        <span matListItemTitle>{{ item.title }}</span>
        <span matListItemLine>{{ item.subTitle }}</span>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    h1 {
      padding: 20px 20px 0;
    }
  `]
})
export class DashboardComponent {
  items = [
    { path: 'aux-route', title: 'Aux Route Example', subTitle: 'It will change the footer for specific route' },
    { path: 'child-to-parent-access', title: 'Child to Parent component access', subTitle: 'How to access the parent component from child component' },
    { path: 'prevent-partial-page-display', title: 'Prevent Partial Page Load', subTitle: 'How to ' },
    { path: 'template-variable-as-component', title: 'Template variable as a component', subTitle: 'How to achieve this using angular feature?' },
    { path: 'service-ondestroy', title: 'Service On Destroy', subTitle: 'ngDestroy hook inside service' },
  ]
}
