import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit{

  constructor( private host: ElementRef) { }

  ngAfterViewInit(): void {
    this.host.nativeElement.focus();
  }

}
