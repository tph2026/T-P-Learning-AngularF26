import { TestBed } from '@angular/core/testing';
import { MockComicService } from './mock-comic-service';

describe('MockComicService', () => {
  let service: MockComicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockComicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
