import {Component, inject} from '@angular/core';
import { Comic } from '../shared/models/comic';
import { ComicListItem } from '../comic-list-item/comic-list-item';
import { ComicService } from '../services/comic-service';

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

  protected onComicOpened(comic: Comic): void {
    console.warn("Opened: " + comic.title);
  }
}
