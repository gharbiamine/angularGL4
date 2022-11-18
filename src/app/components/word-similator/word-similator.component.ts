import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-similator',
  templateUrl: './word-similator.component.html',
  styleUrls: ['./word-similator.component.css'],
})
export class WordSimilatorComponent implements OnInit {
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
