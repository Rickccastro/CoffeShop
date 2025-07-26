import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../../shared/components/forms/login-form/login-form.component';
import { LoginService } from '../../../shared/services/login.service';
import { Login } from '../../../core/models/Login/Login';
import { MatDialog } from '@angular/material/dialog';
import { CestaDialogService } from '../../../shared/services/dialog/cesta-dialog.service';
import { LoginCodeDialogComponent } from '../../../shared/components/dialog/login-code-dialog/login-code-dialog.component';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  loginUser = inject(LoginService);
  dialog = inject(MatDialog); 
  service  = inject(CestaDialogService);
      
  onSubmit(credentials: Login) 
  {
    this.loginUser.loginUser(credentials)
    .subscribe({
       next: (response) => {
        this.exibirLoginTokenPopUp(credentials);
      },
      error: (err) => {
        alert('Erro ao fazer login. Verifique seus dados.');
        console.error(err);
      }
    }
    )  
  } 

   exibirLoginTokenPopUp(credentials: Login) {
      this.dialog.open(LoginCodeDialogComponent, {
        data: {
          login: credentials,
        },
        width: '300px',
        height: '300px',
      });
    }
}
