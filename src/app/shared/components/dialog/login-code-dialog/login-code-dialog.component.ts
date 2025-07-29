import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { Login } from '../../../../core/models/Login/Login';
import { LoginService } from '../../../../core/auth/login.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../../forms/input-form/input-form.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth-service.service';

@Component({
  selector: 'app-login-code-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
  ],
  templateUrl: './login-code-dialog.component.html',
  styleUrl: './login-code-dialog.component.css',
})
export class LoginCodeDialogComponent {
  cardList: Partial<CardDisplay>[] = [];
  dialogRef = inject(MatDialogRef<LoginCodeDialogComponent>);
  loginService = inject(LoginService);
  data = inject<{ login: Login }>(MAT_DIALOG_DATA);
  router = inject(Router);
  authService = inject(AuthService);
  codigoFormControl = new FormControl('', [Validators.required]);

  enviarCodigo(): void {
    this.validarTokenControl();
    const code = this.codigoFormControl.value;
    this.loginService.loginTokenValidated(this.data.login, code!).subscribe({
      next: (response) => {
        alert(`Usuário ${response.emailNm} logado com sucesso!`);
        this.authService.setLoggedIn(true);
        this.close();
        this.router.navigate(['/']);
      },
      error: (err) => {
        const errorMsg =
          err?.error?.message || err?.message || 'Erro desconhecido';
        alert(`Erro ao validar login: ${errorMsg}`);
        this.loginErrorToken();
      },
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  loginErrorToken(): void {
    this.codigoFormControl?.setErrors({ invalid: true });
    this.codigoFormControl?.markAsTouched();
    this.codigoFormControl?.markAsDirty();
  }

  validarTokenControl(): boolean {
    if (this.codigoFormControl?.invalid) {
      this.codigoFormControl?.markAsTouched();
      return false;
    }
    return true;
  }
}
