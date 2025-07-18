import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../core/models/User/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  produtos: any[] = [];

  cadastroEmailNotification(user: User) {
    return this.httpClient.post<User>('/apiJson/users', user.email);
  }

  cadastroUser(user: User) { 
    return this.httpClient.post<User>('https://localhost:7087/Customer/create-customer', user);
  }
  
  atualizarUser(user: User) { 
    return this.httpClient.put<User>('/apiJson/users', user);
  }
}
