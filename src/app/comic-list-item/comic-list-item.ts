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
  expanded = false;
  opened = output<Comic>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.comic());
  }
}

