import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { coffeeResolver } from './resolvers/coffe.resolver';
import { feedbackResolver } from './resolvers/feedbacks.resolver';


export const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    resolve: {
      coffe: coffeeResolver,
      feedback: feedbackResolver
  },
 } 
];
