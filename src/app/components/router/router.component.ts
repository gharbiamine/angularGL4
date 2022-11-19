import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css'],
})
export class RouterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirect(num: Number) {
    if (num == 0) {
      console.log('here');
      this.router.navigate(['/cv']);
    }
    if (num == 1) {
      this.router.navigate(['/word-simulator']);
    }
    if (num == 2) {
      this.router.navigate(['/color-div']);
    }
  }
}
