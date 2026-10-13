import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {COMIC_CONFIG} from './config/comic-config';
import {ComicService} from './services/comic-service';
import {MockComicService} from './services/mock-comic-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: COMIC_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.myanimelist.net/',
        defaultGenre: 'Shounen'
      }
    },
    {
      provide: ComicService,
      useClass: MockComicService
    },
  ]
};
