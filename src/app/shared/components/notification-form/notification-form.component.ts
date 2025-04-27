import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';
import { User } from '../../../core/models/User/User';

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
  ],
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css'],
})
export class NotificationFormComponent {
  @Output() send = new EventEmitter<User>();
  @Input() user: User | null = null;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit() {
    const user = { Email: this.emailFormControl.value } as User;
    this.send.emit(user);
  }
}
