import { Directive, ElementRef, HostBinding, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Directive({
  selector: 'mat-paginator',
  standalone: true,
})
export class FancyPaginatorDirective {
  paginator = inject(MatPaginator);
  el = inject(ElementRef);

  @HostBinding('attr.aria-label') ariaLabel = 'Select page';

  ngOnInit() {
    this.paginator.showFirstLastButtons = true;
    this.paginator.pageSizeOptions = [5, 10, 25];
  }
}
