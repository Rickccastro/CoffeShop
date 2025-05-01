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
    return this.httpClient.post<User>('http://localhost:3000/users', user.email);
  }

  cadastroUser(user: User) { 
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }

  loginUser(user: User) { 
    console.log(user)
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }
}
