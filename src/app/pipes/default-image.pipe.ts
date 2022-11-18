import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    if (!value?.trim()) {
      return 'default.jpg';
    }
    return value;
  }
}
