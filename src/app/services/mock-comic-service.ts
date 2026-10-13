import {computed, effect, inject, Injectable, Service, signal} from '@angular/core';
import {Comic} from '../shared/models/comic';
import {ComicService} from './comic-service';

@Injectable()
export class MockComicService extends ComicService{
  constructor() {
    super(); // <- execute ComicService ONCE
    /* Change Comic List to Mock List */
    this.comics.set([
      {
        id: 1,
        title: 'One Piece',
        author: ['Eiichiro Oda'],
        genre: ['Adventure', 'Action'],
        digitalAvailable: true,
        printAvailable: 1000000,
        isOnHiatus: false,
        image: 'assets/images/onepiece.jpg',
      },
      {
      id: 2,
      title: 'Naruto ',
      author: ['Masashi Kishimoto'],
      genre: ['Ninja', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/naruto.jpg',
    },
    ]);
  }
}
