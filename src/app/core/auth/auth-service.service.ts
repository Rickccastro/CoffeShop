import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Signal para o estado de login
  isLoggedIn = signal(false);

  setLoggedIn(value: boolean) {
    this.isLoggedIn.set(value);
  }
}