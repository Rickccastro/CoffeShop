import { Component, Input} from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (this.control.hasError('email')) {
      return 'E-mail inválido';
    }
    if (this.control.hasError('minlength')) {
      const min = this.control.getError('minlength').requiredLength;
      return `Mínimo de ${min} caracteres`;
    }
    return 'Campo inválido';
  }  
}
