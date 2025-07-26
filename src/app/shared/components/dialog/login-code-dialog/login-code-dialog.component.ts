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
import { LoginService } from '../../../services/login.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../../forms/input-form/input-form.component';
import { Router } from '@angular/router';

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
  codigoControl = new FormControl('', Validators.required);
  data = inject<{ login: Login }>(MAT_DIALOG_DATA);
  router= inject(Router)


  codigoFormControl = new FormControl('', [Validators.required]);

  enviarCodigo(): void {
    this.validarCodigo();
    const code = this.codigoControl.value;
    
    var result = this.loginService.loginTokenValidated(this.data.login, code!).subscribe();

    if(result != null){
     alert(`Usuário ${this.data.login.EmailNm} logado com sucesso!`);
     this.router.navigate(['/']);
    }else{ 
      alert('Código inválido. Tente novamente.');
      console.log('Código inválido. Tente novamente.');
      this.codigoControl?.setErrors({ invalid: true });
      this.codigoControl?.markAsTouched();
      this.codigoControl?.markAsDirty();
    }
  }


  validarCodigo(): boolean {
    if (this.codigoControl?.invalid) {
      this.codigoControl?.markAsTouched();
      return false;
    }
    return true;
  }

  close(): void {
    this.dialogRef.close();
  }
}
