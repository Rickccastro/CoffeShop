import { Component } from '@angular/core';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
