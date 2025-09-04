import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';

export const routes: Routes = [
    {
    path: '',
    component: Home,
  },  {
    path: 'recipes',
    component: Recipes,
  }
];
