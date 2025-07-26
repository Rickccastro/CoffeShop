import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../core/models/User/User';
import { Login } from '../../core/models/Login/Login';
import { Observable } from 'rxjs';
import { LoginTokenValidatedRequest } from '../../core/models/Login/LoginTokenValidatedRequest';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
    httpClient = inject(HttpClient);
  
  loginUser(credentials: Login) : Observable<Login>{ 
    return this.httpClient.post<Login>('/api/Login/login-user', credentials);
  }

   loginTokenValidated(credentials: Login, code: string): Observable<boolean> {
    const payload: LoginTokenValidatedRequest = {
      EmailNm: credentials.EmailNm,
      UsrIntPassword: credentials.UsrIntPassword,
      Code: code
    };
    
    return this.httpClient.post<boolean>('/api/Login/validated-login-user', payload);
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  setSession(token: string, user: Login) {
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
