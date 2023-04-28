import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer.component';

@Component({
  standalone: true,
  selector: 'uf-root',
  template: `
    <uf-navbar></uf-navbar>
    <router-outlet></router-outlet>
    <uf-footer></uf-footer>
  `,
  styles: [``],
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
  ],
})
export class AppComponent {
}
