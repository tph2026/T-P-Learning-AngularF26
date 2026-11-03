import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicForm } from './comic-form';

describe('ComicForm', () => {
  let component: ComicForm;
  let fixture: ComponentFixture<ComicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
