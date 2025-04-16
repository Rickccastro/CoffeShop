import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffe } from '../../core/models/Coffe';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {
  httpClient = inject(HttpClient);

  getCoffees(): Observable<Coffe[]> {
    return this.httpClient.get<Coffe[]>('http://localhost:3000/coffes');
  }
}
