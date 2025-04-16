import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { coffeeResolver } from './coffe.resolver';
import { Coffe } from '../core/components/models/Coffe';
import { Observable } from 'rxjs';

describe('coffeResolver', () => {
  const executeResolver: ResolveFn<Observable<Coffe[]>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => coffeeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
