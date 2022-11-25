import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-loop',
  templateUrl: './image-loop.component.html',
  styleUrls: ['./image-loop.component.css'],
})
export class ImageLoopComponent implements OnInit {
  images = ['red.png', 'green.png', 'yellow.png'];
  imageObservables: Observable<string>[] = [];
  constructor() {}
  createImageObservable(ind: number): Observable<string> {
    return new Observable<string>((observer) => {
      let index = ind;
      setInterval(() => {
        console.log(index);
        observer.next(this.images[index++ % this.images.length]);
      }, 1000);
    });
  }
  ngOnInit(): void {
    for (let i = 0; i < this.images.length; i++) {
      this.imageObservables.push(this.createImageObservable(i));
    }
  }
}
