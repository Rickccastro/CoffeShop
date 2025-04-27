import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { InputComponent } from "../../../shared/components/input/input.component";
import { FormControl, Validators } from '@angular/forms';
import { NotificationFormComponent } from "../../../shared/components/notification-form/notification-form.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NotificationFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
