import { Component, EventEmitter, input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';
import { User } from '../../../core/models/User/User';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() send = new EventEmitter<User>();
  user = input<User | null>(null);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      cpf: new FormControl<string>(this.user()?.Cpf ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      nome: new FormControl<string>(this.user()?.Nome ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),

      email: new FormControl<string>(this.user()?.Email ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),

      senha: new FormControl<string>(this.user()?.Senha ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  onSubmit() {
    const user = this.form.value as User;
    this.send.emit(user);
  }
}
