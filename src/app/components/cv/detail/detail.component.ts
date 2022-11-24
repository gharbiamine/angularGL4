import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/cv/model/person.model';
import { HiringService } from 'src/app/services/hiring.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() person: Person | undefined;
  constructor(
    public hiringService: HiringService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  hire() {
    if (this.person) {
      this.hiringService.hireOrFirePerson(this.person);
      if (this.hiringService.isHired(this.person)) {
        this.toastr.success('Person hired', 'Success');
      } else {
        this.toastr.success('Person fired', 'Warning');
      }
    }
  }
  getDetails(id: number | undefined) {
    console.log('navigating to cv/' + id);
    this.router.navigate(['/cv/detail', id]);
  }
}
