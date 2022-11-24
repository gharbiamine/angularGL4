import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPerson: Person | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  catchPerson(person: Person) {
    this.selectedPerson = person;
  }
  handleAdd() {
    this.router.navigate(['cv/add']);
  }
}
