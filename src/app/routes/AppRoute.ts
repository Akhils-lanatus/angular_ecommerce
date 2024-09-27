import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { SellerDashboardComponent } from '../pages/customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from '../pages/customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { ProductsComponent } from '../pages/products/products.component';
import { CheckoutComponent } from '../pages/customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from '../shared/layouts/page-not-found/page-not-found.component';
import { redirectToLogin } from '../core/guards/auth-guard.guard';

export const AppRoute: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
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
    loadChildren: () => import('./AuthRoutes').then((x) => x.AuthRoutes),
    canActivate: [redirectToLogin]
  },
  {
    path: '',
    children: [
      {
        path: 'seller',
        children: [
          {
            path: 'dashboard',
            title: 'Dashboard',
            component: SellerDashboardComponent
          },
          {
            path: 'products',
            title: 'Products',
            component: ProductsComponent
          }
        ],
      },
      {
        path: 'user',
        children: [
          {
            path: 'dashboard',
            title: 'Dashboard',
            component: BuyerDashboardComponent
          },
          {
            path: 'checkout',
            title: 'Checkout',
            component: CheckoutComponent
          }
        ],
      },
    ],
  },
  {
    title: 'Page Not Found',
    path: '**',
    component: PageNotFoundComponent
  }
];
