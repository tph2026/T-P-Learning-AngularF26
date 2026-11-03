import {computed, effect, inject, Service, signal} from '@angular/core';
import {Comic} from '../shared/models/comic';
import {COMIC_CONFIG} from '../config/comic-config';

@Service()
export class ComicService {
  /* Injection Token */
  private config = inject(COMIC_CONFIG);

  /* Comic List moved from src\app\comic-list\comic-list.ts */
  /* change comics from type private to type protected to allow MockComicService override */
  protected comics = signal<Comic[]>([
    {
      id: 1,
      title: 'One Piece',
      author: ['Eiichiro Oda'],
      genre: ['Adventure', 'Action'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/onepiece.jpg',
    },
    {
      id: 2,
      title: 'Naruto ',
      author: ['Masashi Kishimoto'],
      genre: ['Ninja', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/naruto.jpg',
    },
    {
      id: 3,
      title: 'Hunter x Hunter',
      author: ['Yoshihiro Togashi'],
      genre: ['Action', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: true,
      image: 'assets/images/hunterxhunter.jpg',
    },
    {
      id: 4,
      title: 'Dragon Ball',
      author: ['Akira Toriyama'],
      genre: ['Adventure', 'Shounen'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/dragonball.jpg',
    },
    {
      id: 5,
      title: 'Death Note',
      author: ['Tsugumi Ohba', 'Takeshi Obata'],
      genre: ['Thriller', 'Detective'],
      digitalAvailable: false,
      printAvailable: false,
      isOnHiatus: false,
      image: 'assets/images/deathnote.jpg',
    },
    {
      id: 6,
      title: 'One-Punch Man',
      author: ['One', 'Yusuke Murata'],
      genre: ['Action', 'Comedy'],
      digitalAvailable: true,
      printAvailable: true,
      isOnHiatus: false,
      image: 'assets/images/onepunchman.jpg',
    },
  ]);

  private favouriteIds = signal<readonly number[]>([]);

  comicList = this.comics.asReadonly();
  comicCount = computed(() => this.comics().length);

  favourites = computed(() => this.comics().filter((c) => this.favouriteIds().includes(c.id)));
  favouriteCount = computed(() => this.favouriteIds().length);

  /* Add a list of removed comics here */
  private removedComics = signal<Comic[]>([]);
  removedList = this.removedComics.asReadonly();

  /* Add a list of filtered comics here */
  private filter = inject(COMIC_CONFIG);
  private filteredComics = signal<Comic[]>([]);
  filteredList = this.filteredComics.asReadonly();

  constructor() {
    effect(() => {
      console.log('Comics count is now', this.comicCount());
    });
    /* Effect to displays remaining comics after removal */
    effect(() => {
      console.log('Comics remaining: \n', this.comicList());
      console.log('Comics removed: \n', this.removedList());
      console.log('Comics filtered: \n', this.filteredList());
    });
  }

  refreshComics() {
    console.warn("Comic List Refreshed.");
    for (let removed of this.removedComics()) {
      this.comics.update((list) => [...list, removed]);
      this.removedComics.update((list) => list.filter(i => i.id !== removed.id));
    }
  }

  addComic(c: Comic): void {
    this.comics.update((list) => [...list, c]);
  }

  // map() builds a new array, so the signal sees a new reference and notifies its readers.
  updateComic(updated: Comic): void {
    this.comics.update((list) => list.map((c) => (c.id === updated.id ? updated : c)));
  }
  removeComic(id: number): void {
    /* add the comic to the removed list */
    /* this.removedComics.update((list) => [...list, c]); */

    /* remove the comic from the original list */
    this.comics.update((list) => list.filter(i => i.id !== id));
    this.favouriteIds.update((ids) => ids.filter((existing) => existing !== id));
  }
  filterComic(toggled: boolean): void {
    /* IF FILTER IS ON -> REMOVED FILTERED COMICS FROM LIST */
    if (toggled){
      for (let comic of this.comicList()) {
        if (!comic.genre.includes(this.filter.defaultGenre)){
          this.filteredComics.update((list) => [...list, comic]); // <- add to filtered list
          this.comics.update((list) => list.filter(i => i.id !== comic.id)); // <- remove from main list
        }
      }
      return;
    }
    /* IF FILTER IS OFF -> ADD BACK COMICS */
    for (let filtered of this.filteredList()) {
      this.addComic(filtered); // <- add back the filtered comics to main list
      this.filteredComics.update((list) => list.filter(i => i.id !== filtered.id)); // <- removed comics from filtered list
    }
  }

  // Used by the form when editing. Same lookup as getById, named for that purpose.
  getComic(id: number): Comic | undefined {
    return this.getById(id);
  }
  // There is no server to hand out ids yet, so a new brewery gets one more than the largest id.
  nextId(): number {
    return Math.max(0, ...this.comics().map((c) => c.id)) + 1;
  }
  getById(id: number): Comic | undefined {
    return this.comics().find((c) => c.id === id);
  }
}
