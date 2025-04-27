import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { coffeeResolver } from './resolvers/coffe.resolver';
import { feedbackResolver } from './resolvers/feedbacks.resolver';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';


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
];
