import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Coffe } from '../models/Coffe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {
  httpClient = inject(HttpClient);
  coffes: Coffe[] = []


  getCoffees(): Observable<Coffe[]> {
    return this.httpClient.get<Coffe[]>('http://localhost:3000/coffes');
  }
}
