import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public people: Person[] = [];
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.people = this.cvService.getPeople();
  }
}
