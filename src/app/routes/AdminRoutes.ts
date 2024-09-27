import { Routes } from '@angular/router';
import { AdminLoginComponent } from '../pages/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from '../pages/admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from '../pages/admin/user-crud/user-crud.component';
import { ProductsComponent } from '../pages/products/products.component';

export const AdminRoutes: Routes = [
  {
    path: 'admin/login',
    title: 'Admin - Login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin/dashboard',
    title: 'Admin - Dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin/user-crud',
    title: 'Admin - User Crud',
    component: UserCrudComponent,
  },
  {
    path: 'admin/product',
    title: 'Admin - Products',
    component: ProductsComponent,
  },
];
