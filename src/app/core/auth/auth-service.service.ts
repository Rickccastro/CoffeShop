import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal(false);
  public isLoggedIn = this._isLoggedIn.asReadonly();

  setLoggedIn(value: boolean) {
    this._isLoggedIn.set(value);
  }
}