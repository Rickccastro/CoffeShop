import { Component, EventEmitter, input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../button/button.component';
import { User } from '../../../../core/models/User/User';
import { InputComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  @Output() send = new EventEmitter<User>();
  user = input<User | null>(null);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      cpf: new FormControl<string>(this.user()?.cpf ?? '', {
        nonNullable: true,
        validators: [Validators.required,]
      }),
      nome: new FormControl<string>(this.user()?.nome ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),

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
