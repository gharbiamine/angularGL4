import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') bordercolor: string;

  constructor() {
    this.color = '#000000';
    this.bordercolor = '#000000';
  }
  getRandomColor(): string {
    return (
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase()
    );
  }

  @HostListener('keyup') changeColor() {
    this.color = this.getRandomColor();
  }
}
