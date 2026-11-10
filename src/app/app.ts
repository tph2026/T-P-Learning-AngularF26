import {Component, inject, output, signal} from '@angular/core';

import {Comic} from './shared/models/comic';
import { ComicList } from './comic-list/comic-list';
import {CanActivateFn, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ComicService} from './services/comic-service';
import {ComicStateService} from './services/comic-state-service';
import {editGuard} from './edit-guard';

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
  protected comicState = inject(ComicStateService);
  // moved comicList to comic-list.ts
  // Let the parent component react to a card being opened

  /*
  protected comicList: any;
  onComicOpened(comic: Comic): void {
    // Place holder for now
    console.warn('Opened: ', comic.title);
  }
  */
  // protected readonly editGuard = editGuard;
  // protected readonly ComicStateService = ComicStateService;
}
