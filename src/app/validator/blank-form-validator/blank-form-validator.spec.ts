import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlankFormValidator } from './blank-form-validator';

describe('BlankFormValidator', () => {
  let component: BlankFormValidator;
  let fixture: ComponentFixture<BlankFormValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankFormValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(BlankFormValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
