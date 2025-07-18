import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../core/models/User/User';
// import { Login } from '../../core/models/Login';

export type Login = Pick<User, 'email' | 'senha'>;
export type LoginResponse = Pick<User,'id'| 'email' | 'nome'>;


@Injectable({
  providedIn: 'root'
})
export class LoginService {
    httpClient = inject(HttpClient);
  
  loginUser(credentials: Login) { 
    return this.httpClient.post<LoginResponse>('/api/Login/user-login', credentials);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  setSession(token: string, user: LoginResponse) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
