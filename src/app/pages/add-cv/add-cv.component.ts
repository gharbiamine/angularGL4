import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/cv/model/person.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  person: Person;
  constructor(private router: Router, private cvservice: CvService) {
    this.person = new Person();
  }

  ngOnInit(): void {}
  handleAdd() {
    this.cvservice.addPerson(this.person as Person);
    this.router.navigate(['/cv']);
  }
}
