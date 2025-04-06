import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Coffe } from '../models/Coffe';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {
  httpClient = inject(HttpClient);
  coffes: Coffe[] = []


  getCoffes(){
    return this.httpClient.get<Coffe[]>('');
  } 

}
