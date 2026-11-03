import { Component, inject, signal } from '@angular/core';

import {Comic} from './shared/models/comic';
import { ComicList } from './comic-list/comic-list';
import {RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import {ComicService} from './services/comic-service';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  // imports: [ComicList], // replace with Routers
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // title = signal('Angular-Project');
  protected title = 'COMIC LIST';
  protected favouriteCount = inject(ComicService).favouriteCount;
  // moved comicList to comic-list.ts
  // Let the parent component react to a card being opened


  /*
  protected comicList: any;
  onComicOpened(comic: Comic): void {
    // Place holder for now
    console.warn('Opened: ', comic.title);
  }
  */
}
