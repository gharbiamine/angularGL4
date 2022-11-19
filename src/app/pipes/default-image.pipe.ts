import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string | undefined): string {
    if (!path?.trim()) {
      return 'default.jpg';
    }
    return path;
  }
}
