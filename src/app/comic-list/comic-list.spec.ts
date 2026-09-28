import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicList } from './comic-list';

describe('ComicList', () => {
  let component: ComicList;
  let fixture: ComponentFixture<ComicList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicList],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
