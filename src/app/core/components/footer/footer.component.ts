import { Component, inject } from '@angular/core';
import { User } from '../../models/User/User';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { NotificationFormComponent } from '../../../shared/components/forms/notification-form/notification-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NotificationFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userService = inject(UserService);
  router= inject(Router) 

  onSubmit(user: User) 
  {
    this.userService.cadastroEmailNotification(user).subscribe((data)=>{
      alert(`Email ${data.nome} cadastrado com sucesso!`);
    });
  }   
}
