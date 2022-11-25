import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() person: Person;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {}

  selectPerson() {
    this.cvService.selectPerson(this.person!);
  }
}
