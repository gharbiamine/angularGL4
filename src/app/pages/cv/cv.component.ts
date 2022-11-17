import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPerson: Person | undefined;

  constructor() {}

  ngOnInit(): void {}
  catchPerson(person: Person) {
    this.selectedPerson = person;
  }
}
