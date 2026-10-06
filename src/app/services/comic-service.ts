import {computed, effect, Service, signal} from '@angular/core';
import {Comic} from '../shared/models/comic';

@Service()
export class ComicService {
  /* Comic List moved from src\app\comic-list\comic-list.ts */
  private comics = signal<Comic[]>([
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
    {
      id: 3,
      title: 'Hunter x Hunter',
      author: ['Yoshihiro Togashi'],
      genre: ['Action', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: true,
      image: 'assets/images/hunterxhunter.jpg',
    },
    {
      id: 4,
      title: 'Dragon Ball',
      author: ['Akira Toriyama'],
      genre: ['Adventure', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/dragonball.jpg',
    },
    {
      id: 5,
      title: 'Death Note',
      author: ['Tsugumi Ohba', 'Takeshi Obata'],
      genre: ['Thriller', 'Detective'],
      digitalAvailable: false,
      printAvailable: false,
      isOnHiatus: false,
      image: 'assets/images/deathnote.jpg',
    },
    {
      id: 6,
      title: 'One-Punch Man',
      author: ['One', 'Yusuke Murata'],
      genre: ['Action', 'Comedy'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/onepunchman.jpg',
    },
  ]);
  comicList = this.comics.asReadonly();
  comicCount = computed(() => this.comics().length);

  constructor() {
    effect(() => {
      console.log('Comics count is now', this.comicCount());
    });
  }
  addComic(c: Comic): void {
    this.comics.update((list) => [...list, c]);
  }
}
