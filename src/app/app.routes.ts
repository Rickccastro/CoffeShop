import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { coffeeResolver } from './resolvers/coffe.resolver';
import { feedbackResolver } from './resolvers/feedbacks.resolver';
import { SignInComponent } from './features/Account/sign-in/sign-in.component';
import { UpdateUserComponent } from './features/Account/update-user/update-user.component';
import { SignUpComponent } from './features/Account/sign-up/sign-up.component';
import { PaymentComponent } from './features/payment/payment/payment.component';


export const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    resolve: {
      coffe: coffeeResolver,
      feedback: feedbackResolver
  }
},
 {
   path:'sign-up',
   component:SignUpComponent,
 },
 {
  path:'sign-in',
  component:SignInComponent,
}, 
 {
  path:'update-user',
  component:UpdateUserComponent,
}, 
{
  path:'payment',
  component:PaymentComponent,
}, 
];
