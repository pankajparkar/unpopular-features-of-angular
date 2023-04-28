import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'uf-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
      <button mat-button routerLink="dashboard" class="dashboard-button" aria-label="Example icon-button with heart icon">
        Dashboard
      </button>
      <button mat-button [routerLink]="[{outlets: { modal: ['login'] }}]" class="dashboard-button" aria-label="Example icon-button with heart icon">
        Login
      </button>
  `,
  styles: [``]
})
export class NavbarComponent {

}
