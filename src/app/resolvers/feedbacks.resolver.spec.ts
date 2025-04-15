import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { feedbackResolver } from './feedbacks.resolver';
import { Observable } from 'rxjs';
import { Feedback } from '../models/Feedback';
import { CardDisplay } from '../models/CardDisplay';

describe('feedbacksResolver', () => {
  const executeResolver: ResolveFn<Observable<Partial<CardDisplay[]>>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => feedbackResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
