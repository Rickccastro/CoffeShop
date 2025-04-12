import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CoffeService } from '../services/coffe.service'; 
import { Coffe } from '../models/Coffe';
import { Observable } from 'rxjs/internal/Observable';

export const coffeeResolver: ResolveFn<Observable<Coffe[]>> = () => {
  const service = inject(CoffeService);
  return service.getCoffees(); 
};