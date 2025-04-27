import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [    FormsModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule, ButtonComponent],
  templateUrl: './notification-form.component.html',
  styleUrl: './notification-form.component.css'
})
export class NotificationFormComponent {
  form!: FormGroup;

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      // Lógica de envio de dados ou outros processos aqui
    }
  }
}
