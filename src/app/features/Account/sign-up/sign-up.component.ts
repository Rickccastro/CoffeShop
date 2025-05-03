import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../../core/models/User/User";
import { RegisterFormComponent } from "../../../shared/components/forms/register-form/register-form.component";
import { UserService } from "../../../shared/services/user.service";


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userService = inject(UserService);
  router= inject(Router) 
      
  onSubmit(user: User) 
  {
     this.userService.cadastroUser(user)
    .subscribe((data)=>{
      alert(`Usuario ${data.nome} cadastrado com sucesso!`);
      this.router.navigateByUrl('/');
    });
  }    
}
