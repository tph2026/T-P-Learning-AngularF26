import { Component } from '@angular/core';
import { Comic } from '../shared/models/comic';
import { ComicListItem } from '../comic-list-item/comic-list-item';

@Component({
  imports: [ComicListItem],
  selector: 'app-comic-list',
  styleUrl: './comic-list.css',
  templateUrl: './comic-list.html',
})
export class ComicList {
  /* Comic Array List */
  comicList: Comic[] = [
    {
      id: 1,
      title: 'One Piece',
      author: ['Eiichiro Oda'],
      genre: ['Adventure', 'Action'],
      digitalAvailable: true,
      printAvailable: 1000000,
      isOnHiatus: false,
    },
    {
      id: 2,
      title: 'Naruto ',
      author: ['Masashi Kishimoto'],
      genre: ['Ninja', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
    },
    {
      id: 3,
      title: 'Hunter x Hunter',
      author: ['Yoshihiro Togashi'],
      genre: ['Action', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: true,
    },
    {
      id: 4,
      title: 'Dragon Ball',
      author: ['Akira Toriyama'],
      genre: ['Adventure', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
    },
    {
      id: 5,
      title: 'Death Note',
      author: ['Tsugumi Ohba', 'Takeshi Obata'],
      genre: ['Thriller', 'Detective'],
      digitalAvailable: false,
      printAvailable: false,
      isOnHiatus: false,
    },
    {
      id: 6,
      title: 'One-Punch Man',
      author: ['One', 'Yusuke Murata'],
      genre: ['Action', 'Comedy'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
    },
  ];

  protected onComicOpened($event: Comic) {
    console.log('onComicOpened Function');
  }
}
