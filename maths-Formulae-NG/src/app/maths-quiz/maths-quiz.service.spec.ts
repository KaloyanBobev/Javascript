import { TestBed } from '@angular/core/testing';

import { MathsQuizService } from './maths-quiz.service';

describe('MathsQuizService', () => {
  let service: MathsQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
