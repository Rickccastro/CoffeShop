import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../core/models/User/User';
import { UserRequest } from '../../core/models/User/UserRequest';
import { UserResponse } from '../../core/models/User/UserResponse';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  produtos: any[] = [];

  cadastroEmailNotification(user: User) {
    return this.httpClient.post<User>('/apiJson/users', user.EmailNm);
  }

  
  cadastroUser(userRequest: UserRequest) { 
     return this.httpClient.post<UserResponse>('/api/User/create-user', userRequest);
  }
  
  atualizarUser(user: User) { 
    return this.httpClient.put<User>('/apiJson/users', user);
  }
}
