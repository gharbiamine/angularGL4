import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-div',
  templateUrl: './color-div.component.html',
  styleUrls: ['./color-div.component.css'],
})
export class ColorDivComponent implements OnInit {
  DEFAULT = 'cyan';
  color = this.DEFAULT;
  constructor() {}

  ngOnInit(): void {}

  resetColor() {
    this.color = this.DEFAULT;
  }
}
