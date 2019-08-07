import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const elem = this.elRef.nativeElement as HTMLElement;
    const value = + elem.textContent;

    const addClass = value >= 0 ? 'green-700-fg' : 'red-700-fg';
    const removeClass = value < 0 ? 'green-700-fg' : 'red-700-fg';

    elem.classList.add(addClass);
    elem.classList.remove(removeClass);
    elem.textContent = value.toFixed(2);
  }
}
