import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeLinkStyle]'
})
export class ChangeLinkStyleDirective {

  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyles('red', '20px')

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.applyStyles()

  }

  public applyStyles(backgroundColor = 'white', fontSize = '16px') {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.fontSize = fontSize;

  }

}
