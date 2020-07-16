import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsQuizComponent } from './maths-quiz.component';

describe('MathsQuizComponent', () => {
  let component: MathsQuizComponent;
  let fixture: ComponentFixture<MathsQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
