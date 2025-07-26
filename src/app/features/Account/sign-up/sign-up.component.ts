import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../core/models/User/User';
import { RegisterFormComponent } from '../../../shared/components/forms/register-form/register-form.component';
import { UserService } from '../../../shared/services/user.service';
import { UserRequest } from '../../../core/models/User/UserRequest';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  userService = inject(UserService);
  router = inject(Router);

  onSubmit(user: User) {
    var userRequest = this.createUserRequest(user);
    this.userService.cadastroUser(userRequest).subscribe((res) => {
      alert(`Usuario ${res.usrNm} cadastrado com sucesso!`);
      this.router.navigateByUrl('/');
    });
  }

  private createUserRequest(user: User): UserRequest {
    var userRequest: UserRequest = {
      UsrIntCpf: user.UsrIntCpf,
      UsrNm: user.UsrNm,
      UsrIntPassword: user.UsrIntPassword,
      UsrNmEndereco: user.UsrNmEndereco,
      EmailNm: user.EmailNm,    
    }
   return userRequest; 
  }
}
