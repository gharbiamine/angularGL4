import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/cv/model/person.model';
import { CvService } from 'src/app/services/cv.service';
import { HiringService } from 'src/app/services/hiring.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  person: Person | undefined;
  id: number | undefined;
  routeSub: any;
  constructor(
    private router: Router,
    private cvService: CvService,
    private hiringService: HiringService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.person = this.cvService.getPersonById(this.id);
  }
  handleBackClick() {
    this.router.navigate(['cv']);
  }
  handleDeleteClick() {
    this.cvService.deletePerson(this.person!);
    if (this.hiringService.isHired(this.person!)) {
      this.hiringService.hireOrFirePerson(this.person!);
    }
    this.router.navigate(['cv']);
  }
}
