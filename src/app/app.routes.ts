import { Routes } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
        { path: 'login', component: LoginInComponent },
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'home', component: HomeComponent, canActivate: [authGuard] },
        { path: 'cart', component: CartComponent },
];
