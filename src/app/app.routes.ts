import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { coffeeResolver } from './resolvers/coffe.resolver';

export const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    resolve: {
      coffe: coffeeResolver
    }
  },
];
