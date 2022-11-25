import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';
import { Person } from 'src/app/cv/model/person.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPerson: Person;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleAdd() {
    this.router.navigate(['cv/add']);
  }
}
