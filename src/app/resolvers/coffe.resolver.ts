import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Coffe } from '../core/components/models/Coffe';
import { Observable } from 'rxjs/internal/Observable';
import { CoffeService } from '../shared/services/coffe.service';

export const coffeeResolver: ResolveFn<Observable<Coffe[]>> = () => {
  const service = inject(CoffeService);
  return service.getCoffees(); 
};