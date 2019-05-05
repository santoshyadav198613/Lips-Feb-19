import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('appHover') defaultColor: string;
  @Input() mouseHoverColor: string;
  @Input() mouseOutColor: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element);
    console.log(this.defaultColor);
    // this.renderer.(element.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseover') onmouseover() {
    console.log(this.defaultColor);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.mouseHoverColor);
  }

  @HostListener('mouseout') onmouseout() {
    console.log(this.defaultColor);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.mouseOutColor);
  }

}
