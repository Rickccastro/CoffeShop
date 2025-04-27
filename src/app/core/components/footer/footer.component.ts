import { Component, inject } from '@angular/core';
import { NotificationFormComponent } from "../../../shared/components/notification-form/notification-form.component";
import { User } from '../../models/User/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NotificationFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userService = inject(UserService);

  onSubmit(user: User) 
  {
    this.userService.cadastroEmailNotification(user);
  }    
}
