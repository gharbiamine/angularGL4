import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/cv/model/person.model';
import { HiringService } from 'src/app/services/hiring.service';

@Component({
  selector: 'app-hired',
  templateUrl: './hired.component.html',
  styleUrls: ['./hired.component.css'],
})
export class HiredComponent implements OnInit {
  people: Person[] = [];
  constructor(private hiringService: HiringService) {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    this.people = this.hiringService.getHiredList();
  }
}
