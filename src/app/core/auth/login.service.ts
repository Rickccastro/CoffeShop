import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../../core/models/Login/Login';
import { Observable, tap } from 'rxjs';
import { LoginTokenValidatedRequest } from '../../core/models/Login/LoginTokenValidatedRequest';
import { AuthService } from './auth-service.service';
import { LoginTokenValidatedResponse } from '../models/Login/LoginTokenValidatedResponse';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  httpClient = inject(HttpClient);
  authService = inject(AuthService);

  loginUser(credentials: Login): Observable<Login> {
    return this.httpClient.post<Login>('/api/Login/login-user', credentials);
  }

  logoutUser() {
    this.httpClient
      .post('/api/Login/logout-user', {}, { withCredentials: true })
      .subscribe(() => {
        this.authService.setLoggedIn(false);
      });
  }

  loginTokenValidated(credentials: Login, code: string): Observable<LoginTokenValidatedResponse> {
    const payload: LoginTokenValidatedRequest = {
      EmailNm: credentials.EmailNm,
      UsrIntPassword: credentials.UsrIntPassword,
      EmailCode: code,
    };

    return this.httpClient
      .post<LoginTokenValidatedResponse>('/api/Login/validated-login-user', payload, {
        withCredentials: true,
      })
      .pipe(tap(() => this.authService.setLoggedIn(true)));
  }
}
