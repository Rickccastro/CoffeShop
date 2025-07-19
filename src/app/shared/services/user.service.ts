import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../core/models/User/User';

export interface UserRequest {
  UsrIntCpf: string;
  UsrNm: string;
  UsrIntPassword: number;
  UsrNmEndereco: string;
  EmailNm: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  produtos: any[] = [];

  cadastroEmailNotification(user: User) {
    return this.httpClient.post<User>('/apiJson/users', user.EmailNm);
  }

  
  cadastroUser(user: User) { 
     const userRequest: UserRequest = this.toUserRequest(user);
    return this.httpClient.post<User>('/api/User/create-user', userRequest);
  }
  
  atualizarUser(user: User) { 
    return this.httpClient.put<User>('/apiJson/users', user);
  }

    private toUserRequest(user: User): UserRequest {
    return {
      UsrIntCpf: user.UsrIntCpf,
      UsrNm: user.UsrNm,
      UsrIntPassword: Number(user.UsrIntPassword), // ajuste conforme tipo esperado
      UsrNmEndereco: user.UsrNmEndereco,
      EmailNm: user.EmailNm,
    };
  }
}
