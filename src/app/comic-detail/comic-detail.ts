import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ComicService } from '../services/comic-service';
import {ComicListItem} from '../comic-list-item/comic-list-item';

@Component({
  imports: [RouterLink],
  selector: 'app-comic-detail',
  styleUrl: './comic-detail.css',
  templateUrl: './comic-detail.html',
})
export class ComicDetail {
  protected comicService = inject(ComicService);
  private router = inject(Router);

  id = input.required<string>();

  protected comic = computed(() => this.comicService.getById(Number(this.id())));

  protected onDelete(id: number): void {
    this.comicService.removeComic(id);
    this.router.navigate(['/comics']);
  }

}
