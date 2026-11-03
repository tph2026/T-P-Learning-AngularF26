import { Routes } from '@angular/router';
import {ComicList} from './comic-list/comic-list';
import {ComicDetail} from './comic-detail/comic-detail';

export const routes: Routes = [
  // pathMatch: 'full' is required for an empty path. Every URL starts with an empty string,
  // so with the default prefix matching this redirect would match every URL.
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  { path: 'comics', component: ComicList },

  // The router checks routes top to bottom and uses the first match.
  // This route is listed before comics/:id to make the order easy to read.
  // It cannot clash anyway: it has three segments and comics/:id has two.
  /*{ path: 'comics/genre/:genre', component: ComicByGenre },*/
  { path: 'comics/:id', component: ComicDetail },
  /*{ path: 'favourites', component: Favourites },*/

  // One component serves both routes. On edit/:id the :id arrives as a signal input, on add it is undefined.
  /*{ path: 'add', component: ComicForm },*/
  /*{ path: 'edit/:id', component: ComicForm },*/

  // The wildcard matches anything, so it must be last.
  /*{ path: '**', component: PageNotFound },*/
];
