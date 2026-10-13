import {Component, inject, signal} from '@angular/core';
import { Comic } from '../shared/models/comic';
import { ComicListItem } from '../comic-list-item/comic-list-item';
import { ComicService } from '../services/comic-service';
import { COMIC_CONFIG } from '../config/comic-config';

@Component({
  imports: [ComicListItem],
  selector: 'app-comic-list',
  styleUrl: './comic-list.css',
  templateUrl: './comic-list.html',
})
export class ComicList {
  /* Comic Array List */
  /* Comic list moved to src\app\services\comic.ts */
  /* Replaced with Inject */
  private comicService = inject(ComicService);
  protected comicList = this.comicService.comicList;

  /* Add a button to filter comics based on default API config value "Shounen" */
  protected filter = inject(COMIC_CONFIG);
  filterToggled = false;
  protected onShounenToggled(): void {
    this.filterToggled = !this.filterToggled;
    if (this.filterToggled) { console.warn("Filtered by: " + this.filter.defaultGenre); }
    else { console.warn("Filtered disabled."); }
    this.comicService.filterComic(this.filterToggled);
  }

  onButtonClicked(): void {
    this.comicService.refreshComics();
  }

  protected onComicOpened(comic: Comic): void {
    console.warn("Removed: " + comic.title);
    /* remove the comic when clicked */
    this.comicService.removeComic(comic);
  }
}
