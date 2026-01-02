import { Routes } from '@angular/router';
import { Register } from './register/register';
import { nav } from './nav/nav';
import { information } from './information/information';


export const routes: Routes = [
  { path: `register`, component: Register, },
  { path: `nav`, component: nav, },
  { path: `information`, component: information }
];
