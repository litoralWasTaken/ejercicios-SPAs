import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckInput]'
})
export class CheckInputDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keyup') onKeyPress() {
    if (this.el.nativeElement.value == '') {
      this.el.nativeElement.style.borderColor = 'red';
    } else {
      this.el.nativeElement.style.borderColor = '';
    }

  }



}
