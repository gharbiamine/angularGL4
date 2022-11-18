import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() person: Person | undefined;
  @Output() sendPerson = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectPerson() {
    this.sendPerson.emit(this.person);
  }
}
