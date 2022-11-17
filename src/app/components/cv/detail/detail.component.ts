import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() person: Person | undefined;
  constructor() {}

  ngOnInit(): void {}
}
