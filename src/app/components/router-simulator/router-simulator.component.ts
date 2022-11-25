import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css'],
})
export class RouterSimulatorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirect(num: Number) {
    if (num == 0) {
      this.router.navigate(['/cv']);
    }
    if (num == 1) {
      this.router.navigate(['/word-simulator']);
    }
    if (num == 2) {
      this.router.navigate(['/color-div']);
    }
    if (num == 3) {
      this.router.navigate(['/sign-in']);
    }
    if (num == 4) {
      this.router.navigate(['/image-loop']);
    }
  }
}
