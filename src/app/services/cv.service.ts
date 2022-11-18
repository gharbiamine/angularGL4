import { Injectable } from '@angular/core';
import { Person } from '../cv/model/person.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  people: Person[] = [];

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
}
