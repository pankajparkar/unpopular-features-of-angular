import { Directive, ElementRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[ufUseRef]',
  standalone: true,
  exportAs: 'ufUseRef',
})
export class UseRefDirective {
  dom = inject(ElementRef).nativeElement;
}