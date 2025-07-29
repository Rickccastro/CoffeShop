import { User } from "../User/User";

export interface LoginTokenValidatedResponse {
  usrNm: string;
  emailNm: string;
  token: string;
}
