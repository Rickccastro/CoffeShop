import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
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
export class RegisterFormComponent implements OnInit {
  @Output() send = new EventEmitter<User>();
  user = input<User | null>(null);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      UsrIntCpf: new FormControl<string>(this.user()?.UsrIntCpf ?? '', {
        nonNullable: true,
        validators: [Validators.required,]
      }),
      UsrNm: new FormControl<string>(this.user()?.UsrNm ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),

      EmailNm: new FormControl<string>(this.user()?.EmailNm ?? '', {
        nonNullable: true,
        validators: [Validators.required,Validators.email]
      }),

     UsrNmEndereco: new FormControl<string>(this.user()?.UsrNmEndereco ?? '', {
        nonNullable: true,
        validators: Validators.required
      }),
      UsrIntPassword: new FormControl<string>(this.user()?.UsrIntPassword ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern("^[0-9]+$")]
      }),
    });
  }

  onSubmit() {
    const user = this.form.value as User;
    console.log(user);
    this.send.emit(user);
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }  
}
