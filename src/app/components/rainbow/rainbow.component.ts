import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.css'],
})
export class RainbowComponent implements OnInit {
  color: '#ffffff' | undefined;
  fontFamily: 'Times New Roman' | undefined;
  fontSize: 32 | undefined;
  constructor() {}

  ngOnInit(): void {}
}
