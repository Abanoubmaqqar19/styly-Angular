import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";


@Directive({
  selector: '[appDisableAfterClick]'
})
export class DisableAfterClickDirective {


  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  @HostListener('click')
  handleClick() {
    this.renderer2.setProperty(this.el.nativeElement,'disabled',true)


    this.renderer2.setProperty(this.el.nativeElement, 'innerText', 'Processing…');



    setTimeout(() => {
      this.renderer2.setProperty(this.el.nativeElement, 'disabled', false);
      this.renderer2.setProperty(this.el.nativeElement, 'innerText', "Buy Now");
    }, 3000);
  }
}

