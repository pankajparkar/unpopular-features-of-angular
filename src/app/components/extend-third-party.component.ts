import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FancyPaginatorDirective } from '../shared/fancy-paginator.component';

@Component({
  selector: 'uf-extend-third-party',
  standalone: true,
  imports: [
    MatPaginatorModule,
    // FancyPaginatorDirective,
  ],
  template: `
  <mat-paginator
    (page)="handlePageEvent($event)"
    [length]="length"
    [pageIndex]="pageIndex"
    [pageSize]="pageSize"
    [showFirstLastButtons]="true"
    [pageSizeOptions]="[5,10,25]"
    aria-label="Select page">
  </mat-paginator>
  <hr>

  <!-- <mat-paginator
    (page)="handlePageEvent($event)"
    [length]="length"
    [pageIndex]="pageIndex"
    [pageSize]="pageSize">
  </mat-paginator> -->
  `,
  styles: [
  ]
})
export class ExtendThirdPartyComponent {
  length = 100;
  pageIndex = 1;
  pageSize = 10;
  handlePageEvent($event: any) { console.log($event) }
}
