import { Component, inject } from '@angular/core';
import { UpdateFormComponent } from '../../../shared/components/forms/update-form/update-form.component';
import { Router } from '@angular/router';
import { User } from '../../../core/models/User/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [UpdateFormComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  userService = inject(UserService);
  router= inject(Router) 
      
  onSubmit(user: User) 
  {
     this.userService.atualizarUser(user)
    .subscribe((data)=>{
      alert(`Usuario ${data.UsrNm} atualizado com sucesso!`);
      this.router.navigateByUrl('/');
    });
  }  
}
