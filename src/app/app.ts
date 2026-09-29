import { Component, signal } from '@angular/core';

import {Comic} from './shared/models/comic';
import { ComicList } from './comic-list/comic-list';

@Component({
  imports: [ComicList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('Angular-Project');
  // moved comicList to comic-list.ts
  // Let the parent component react to a card being opened
  protected comicList: any;
  onComicOpened(comic: Comic): void {
    /* Place holder for now */
    console.warn('Opened: ', comic.title);
  }
}
