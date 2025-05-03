import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../core/models/User/User';
import { UserService } from '../../../shared/services/user.service';
import { LoginFormComponent } from '../../../shared/components/forms/login-form/login-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  userService = inject(UserService);
  router= inject(Router) 
      
  onSubmit(user: User) 
  {
     this.userService.loginUser(user)
    .subscribe((data)=>{
      alert(`Usuario ${data.nome} Logado com sucesso!`);
      this.router.navigateByUrl('/');
    });
  } 
}
