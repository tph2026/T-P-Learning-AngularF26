import {InjectionToken} from '@angular/core';

export interface ComicConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const COMIC_CONFIG = new InjectionToken<ComicConfig>('comic.config');
