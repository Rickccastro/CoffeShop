import { Login } from './Login';

export interface LoginTokenValidatedRequest {
  UsrIntPassword: Login['UsrIntPassword'];
  EmailNm: Login['EmailNm'];
  Code: string;
}
