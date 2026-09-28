import { Component, input, output } from '@angular/core';
import { Comic } from '../shared/models/comic';

@Component({
  imports: [],
  selector: 'app-comic-list-item',
  styleUrl: './comic-list-item.css',
  templateUrl: './comic-list-item.html',
})
export class ComicListItem {
  comic = input.required<Comic>();
  opened = output<Comic>();

  toggle(): void {
    this.opened.emit(this.comic());
  }
}
