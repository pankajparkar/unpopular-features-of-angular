import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {
  constructor() { }

  getCardDetails() {
    return {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'Photo of a Shiba Inu',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      buttons: ['LIKE', 'SHARE'],
    };
  }
}
