import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() forwardedPerson = new EventEmitter();
  public people: Person[] = [];
  constructor() {}

  ngOnInit(): void {
    this.people = [
      new Person(1, 'Amine', 'Gharbi', 22, 'SWE', 'amine.jpg'),
      new Person(2, 'Alaeddine', 'Fattouch', 33, 'SWE', 'amine.jpg'),
      new Person(3, 'Nader', 'Ouerdiane', 44, 'SWE', ''),
    ];
  }
  forwardPerson(person: Person) {
    this.forwardedPerson.emit(person);
  }
}
