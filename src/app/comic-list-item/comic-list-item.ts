import { Component, input, output } from '@angular/core';
import { Comic } from '../shared/models/comic';
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: 'app-comic-list-item',
  styleUrl: './comic-list-item.css',
  templateUrl: './comic-list-item.html',
})
export class ComicListItem {
  comic = input.required<Comic>();
  expanded = false;
  isFavourite = input(false);
  opened = output<Comic>();
  deleteToggled = output<number>();
  favouriteToggled = output<number>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.comic());
  }
  protected onFavouriteClick(event: MouseEvent): void {
    // Without stopPropagation(), this click would bubble up and
    // run the card's own click handler too, expanding the card.
    event.stopPropagation();
    this.favouriteToggled.emit(this.comic().id);
  }
  protected onDeleteClick(event: MouseEvent): void {
    // Without stopPropagation(), this click would bubble up and
    // run the card's own click handler too, expanding the card.
    event.stopPropagation();
    this.deleteToggled.emit(this.comic().id);
  }
}

