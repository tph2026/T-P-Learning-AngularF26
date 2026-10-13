import {InjectionToken} from '@angular/core';

export interface ComicConfig {
  apiBaseUrl: string;
  defaultGenre: string;
}

export const COMIC_CONFIG = new InjectionToken<ComicConfig>('comic.config');
