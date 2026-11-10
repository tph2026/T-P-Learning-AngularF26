import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {ComicStateService} from './services/comic-state-service';

export const editGuard: CanActivateFn = (route, state) => {
  const comicState = inject(ComicStateService);
  const router = inject(Router);

  if (comicState.editEnable()) {
    return true; // Allow navigation to /edit/:id
  }

  return router.createUrlTree(['/comics']);
};
