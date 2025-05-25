import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../input-form/input-form.component';
import { User } from '../../../../core/models/User/User';

@Component({
  selector: 'app-login-form',
  standalone: true,
   imports: [
       ReactiveFormsModule,
       MatFormFieldModule,
       MatInputModule,
       ButtonComponent,
       InputComponent
     ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
 @Output() send = new EventEmitter<User>();
    user = input<User | null>(null);
    form!: FormGroup;
  
    ngOnInit(): void {
      this.form = new FormGroup({  
        email: new FormControl<string>(this.user()?.email ?? '', {
          nonNullable: true,
          validators: [Validators.required,Validators.email]
        }),
  
        senha: new FormControl<string>(this.user()?.senha ?? '', {
          nonNullable: true,
          validators: [Validators.required, Validators.pattern("^[0-9]+$")]
        }),
      });
    }
  
    onSubmit() {
      const user = this.form.value as User;
      this.send.emit(user);
    }
  
    getControl(controlName: string): FormControl {
      return this.form.get(controlName) as FormControl;
    } 
}
