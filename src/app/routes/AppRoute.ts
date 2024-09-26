import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { SellerDashboardComponent } from '../pages/customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from '../pages/customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { ProductsComponent } from '../pages/products/products.component';
import { CheckoutComponent } from '../pages/customer/buyer/checkout/checkout.component';

export const AppRoute: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '/',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'my-profile',
    title: 'Profile',
    component: UserProfileComponent,
  },
  {
    path: 'contact-us',
    title: 'Contact Us',
    component: ContactUsComponent,
  },
  {
    path: 'admin',
    title: 'Admin',
    component: AdminComponent,
    loadChildren: () => import('./AdminRoutes').then((x) => x.AdminRoutes),
  },
  {
    path: 'auth',
    redirectTo: '/auth/login',
    loadChildren: () => import('./AuthRoutes').then((x) => x.AuthRoutes),
  },
  {
    path: '',
    children: [
      {
        path: 'seller-dashboard',
        title: 'Seller Dashboard',
        component: SellerDashboardComponent,
      },
      {
        path: 'seller-products',
        title: 'Seller Products',
        component: ProductsComponent,
      },
      {
        path: 'buyer-dashboard',
        title: 'Buyer Dashboard',
        component: BuyerDashboardComponent,
      },
      {
        path: 'checkout',
        title: 'Checkout',
        component: CheckoutComponent,
      },
    ],
  },
];
