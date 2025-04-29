import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appSuperBtn]'
})
export class SuperBtnDirective {

  el = inject(ElementRef);

  @Input({ alias: "appSuperBtn" }) set backgroundColor(value: string) {
    if (value) {
      this.el.nativeElement.style.backgroundColor = value;
    }
  }

  constructor() {
    console.log("ref", this.el)
    this.el.nativeElement.style.backgroundColor = "lightpink";

  }

}
