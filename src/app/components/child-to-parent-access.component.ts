import { Component, Host, Optional, forwardRef, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardsService } from '../services/cards.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'child-component',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  template: `
    <strong>I'm somewhere in the footer</strong>
  `,
})
export class ChildComponent {
  // Needs to read parent info
  // protected parent = inject(AppComponent);
  @Host() @Optional()
  protected parent = inject(ParentComponent);

  ngOnInit() {
    console.log(this.parent);
  }
}

@Component({
  selector: 'uf-child-to-parent-access',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgFor,
    ChildComponent,
  ],
  providers: [CardsService],
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{card.title}}</mat-card-title>
        <mat-card-subtitle>{{card.title}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="card.image" [alt]="card.alt">
      <mat-card-content>
        <p>
          {{card.description}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button *ngFor="let button of card.buttons">
          {{button}}
        </button>
        <child-component></child-component>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
  ]
})
export class ParentComponent {
  protected card = inject(CardsService).getCardDetails();
}
