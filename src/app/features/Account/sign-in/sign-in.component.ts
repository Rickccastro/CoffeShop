import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../../shared/components/forms/login-form/login-form.component';
import { LoginService } from '../../../shared/services/login.service';
import { Login } from '../../../core/models/Login';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  loginUser = inject(LoginService);
  router= inject(Router) 
      
  onSubmit(credentials: Login) 
  {
     this.loginUser.loginUser(credentials)
    .subscribe({
       next: (response) => {
        this.loginUser.setSession(response.EmailNm,response); 
        alert(`Usuário ${response.EmailNm} logado com sucesso!`);
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Erro ao fazer login. Verifique seus dados.');
        console.error(err);
      }
    }
    )  
  } 
}
