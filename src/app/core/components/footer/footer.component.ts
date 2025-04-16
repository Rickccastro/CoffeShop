import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { InputComponent } from "../../../components/input/input.component";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
