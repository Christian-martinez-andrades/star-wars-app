import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapiImage'
})
export class SwapiImagePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const baseUrl = 'https://starwars-visualguide.com/assets/img/';
    let imageUrl = '';

    // Extract the ID from the URL
    const id = value.match(/\/(\d+)\/$/)?.[1];

    if (value.includes('people')) {
      imageUrl = `${baseUrl}characters/${id}.jpg`;
    } else if (value.includes('vehicles')) {
      imageUrl = `${baseUrl}vehicles/${id}.jpg`;
    } else if (value.includes('planets')) {
      imageUrl = `${baseUrl}planets/${id}.jpg`;
    } else if (value.includes('starships')) {
      imageUrl = `${baseUrl}starships/${id}.jpg`;
    }else if (value.includes('films')) {
      imageUrl = `${baseUrl}films/${id}.jpg`;
    }

    return imageUrl;
  }

}
