import { TestBed } from '@angular/core/testing';
import { ComicStateService } from './comic-state-service';

describe('ComicStateService', () => {
  let service: ComicStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
