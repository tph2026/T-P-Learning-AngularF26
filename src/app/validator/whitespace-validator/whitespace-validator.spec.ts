import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhitespaceValidator } from './whitespace-validator';

describe('WhitespaceValidator', () => {
  let component: WhitespaceValidator;
  let fixture: ComponentFixture<WhitespaceValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitespaceValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(WhitespaceValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
