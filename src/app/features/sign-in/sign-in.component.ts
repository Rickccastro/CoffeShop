import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../core/models/User/User';
import { UserService } from '../../shared/services/user.service';
import { FormComponent } from '../../shared/components/forms/register-form/register-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  userService = inject(UserService);
  router= inject(Router) 
      
  onSubmit(user: User) 
  {
     this.userService.loginUser(user)
    .subscribe((data)=>{
      alert(`Usuario ${data.nome} Login com sucesso!`);
      this.router.navigateByUrl('/');
    });
  } 
}
