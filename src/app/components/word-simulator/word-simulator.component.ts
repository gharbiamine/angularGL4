import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-simulator',
  templateUrl: './word-simulator.component.html',
  styleUrls: ['./word-simulator.component.css'],
})
export class WordSimulatorComponent implements OnInit {
  text: string;
  color: string;
  fontFamily: string;
  fontSize: number;
  constructor() {
    this.text = 'Sample Text';
    this.color = 'black';
    this.fontFamily = 'Verdana';
    this.fontSize = 32;
  }

  ngOnInit(): void {}
}
