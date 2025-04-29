import { Component, inject } from '@angular/core';
import { FormComponent } from '../../shared/components/form/form.component';
import { NotificationFormComponent } from "../../shared/components/notification-form/notification-form.component";
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from '../../core/models/User/User';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userService = inject(UserService);
  router= inject(Router) 
      
  onSubmit(user: User) 
  {
     this.userService.cadastroUser(user);
    // .subscribe((data)=>{
    //   alert(`Usuario ${data.Nome} cadastrado com sucesso!`);
    //   this.router.navigateByUrl('/');
    // });
  }    
}
