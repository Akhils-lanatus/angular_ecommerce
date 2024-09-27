import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/customer/login/login.component';
import { RegisterComponent } from '../pages/customer/register/register.component';

export const AuthRoutes: Routes = [

  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
];
