import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { coffeeResolver } from './resolvers/coffe.resolver';
import { feedbackResolver } from './resolvers/feedbacks.resolver';
import { SignInComponent } from './features/Account/sign-in/sign-in.component';
import { UpdateUserComponent } from './features/Account/update-user/update-user.component';
import { SignUpComponent } from './features/Account/sign-up/sign-up.component';
import { CoffeesComponent } from './features/products/coffees/coffees.component';
import { PaymentComponent } from './features/payment/payment.component';
import { CheckoutSessionsService } from './shared/services/payment/checkout-sessions.service';
import { CheckoutReturnComponent } from './features/payment/result/checkout-return/checkout-return.component';


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
  path:'coffees',
  component:CoffeesComponent,
  resolve: {
    coffee: coffeeResolver,
}
}, 
{
  path:'payment',
  component:PaymentComponent,
},
{
  path:'return-checkout',
  loadComponent: () => import('./features/payment/result/checkout-return/checkout-return.component').then(m => m.CheckoutReturnComponent)
},  
];
