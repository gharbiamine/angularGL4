import { Injectable } from '@angular/core';
import { Person } from '../cv/model/person.model';

@Injectable({
  providedIn: 'root',
})
export class HiringService {
  hired: Person[] = [];
  constructor() {}
  getHiredList() {
    return this.hired;
  }
  hireOrFirePerson(person: Person) {
    const index = this.hired.indexOf(person);
    if (index === -1) {
      this.hired.push(person);
    } else {
      this.hired.splice(index, 1);
    }
  }
  isHired(person?: Person) {
    if (person) return this.hired.indexOf(person) !== -1;
    return false;
  }
}
