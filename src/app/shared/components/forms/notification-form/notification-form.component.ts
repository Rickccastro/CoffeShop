import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../button/button.component';
import { User } from '../../../../core/models/User/User';
import { InputComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    InputComponent,
    MatInputModule,
    ButtonComponent,
  ],
  templateUrl: './notification-form.component.html',
  styleUrl: './notification-form.component.css',
})
export class NotificationFormComponent {
  @Output() send = new EventEmitter<User>();
  @Input() user: User | null = null;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit() {
    const user = { EmailNm: this.emailFormControl.value } as User;
    this.send.emit(user);
  }
}
