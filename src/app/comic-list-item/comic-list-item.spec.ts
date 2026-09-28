import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicListItem } from './comic-list-item';

describe('ComicListItem', () => {
  let component: ComicListItem;
  let fixture: ComponentFixture<ComicListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
