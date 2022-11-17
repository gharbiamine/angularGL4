import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  public hovered: boolean;
  @Input() isHoverable = false;
  @Input() person: Person | undefined;
  @Output() sendPerson = new EventEmitter();
  constructor() {
    this.hovered = false;
  }

  ngOnInit(): void {}

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }
  selectPerson() {
    this.sendPerson.emit(this.person);
  }
}
