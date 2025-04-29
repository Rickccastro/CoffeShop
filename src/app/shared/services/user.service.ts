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
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }

  cadastroUser(user: User) {
    return console.log("cadastroUser")
    // return this.httpClient.post<User>('http://localhost:3000/users', user);
  }
}
