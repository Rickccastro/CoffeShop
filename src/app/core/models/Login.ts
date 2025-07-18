import { User } from "./User/User";

export type Login = Pick<User, 'email' | 'senha'>;
