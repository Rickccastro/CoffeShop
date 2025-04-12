import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { feedbacksResolver } from './feedbacks.resolver';

describe('feedbacksResolver', () => {
  const executeResolver: ResolveFn<null> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => feedbacksResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
