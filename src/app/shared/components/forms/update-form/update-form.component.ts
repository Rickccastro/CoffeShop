import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../core/models/User/User';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      ButtonComponent,
      InputComponent
    ],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
   @Output() send = new EventEmitter<User>();
    user = input<User | null>(null);
    form!: FormGroup;
  
    ngOnInit(): void {
      this.form = new FormGroup({
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
