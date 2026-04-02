import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { OrderComponent } from '../components/order/order.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'orders', component: OrderComponent },

  // 404 - Not Found
  { path: '**', component: NotfoundComponent },
];
