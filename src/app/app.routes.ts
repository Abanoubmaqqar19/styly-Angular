import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { OrderComponent } from '../components/order/order.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutUsComponent, title: 'About Us' },
  { path: 'contact', component: ContactUsComponent, title: 'Contact Us' },
  {
    path: 'orders',
    component: OrderComponent,
    title: 'Orders',
    children: [
      { path: '', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },

  // 404 - Not Found
  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];
