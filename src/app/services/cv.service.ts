import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../cv/model/person.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  people: Person[] = [];
  selectedPerson: Subject<Person> = new Subject<Person>();
  constructor() {
    this.people = [
      new Person(1, 'Amine', 'Gharbi', 22, 'SWE', 'amine.jpg'),
      new Person(2, 'Alaeddine', 'Fattouch', 21, 'SWE', 'amine.jpg'),
      new Person(3, 'Nader', 'Ouerdiane', 44, 'SWE', ''),
    ];
  }
  getPeople(): Person[] {
    return this.people;
  }
  getPersonById(id: number | undefined): Person {
    const person = this.people.find((person) => person.id == id);
    if (person) return person;
    return new Person(0, '', '', 0, '', '');
  }
  addPerson(person: Person) {
    if (this.people.length > 0) {
      person.id = this.people[this.people.length - 1].id + 1;
    } else {
      person.id = 1;
    }
    this.people.push(person);
  }
  deletePerson(person: Person) {
    const index = this.people.indexOf(person);
    this.people.splice(index, 1);
  }
  selectPerson(person: Person) {
    this.selectedPerson.next(person);
  }
}
