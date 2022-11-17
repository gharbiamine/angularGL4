import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() person: Person | undefined = undefined;
  @Input() isHoverable = false;
  constructor() {}
  ngOnInit() {}
}
