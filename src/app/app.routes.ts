import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/buyer/auth-page/auth-page.component';
import { RegisterPageComponent } from './pages/buyer/register-page/register-page.component';
import { RunnerListPageComponent } from './pages/buyer/runner-list-page/runner-list-page.component';
import { RunnerProfilePageComponent } from './pages/buyer/runner-profile-page/runner-profile-page.component';
import { ProductDetailsComponent } from './pages/buyer/product-details/product-details.component';
import { CartComponent } from './pages/buyer/cart/cart.component';
import { CheckoutPageComponent } from './pages/buyer/checkout-page/checkout-page.component';


export const routes: Routes = [
    {path: 'buyer-login', component: AuthPageComponent},
    {path: 'buyer-register', component: RegisterPageComponent},
    {path: 'runner-list', component: RunnerListPageComponent},
    {path: 'runnerProfile', component:RunnerProfilePageComponent},
    {path: 'productDetails', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component:CheckoutPageComponent}
    
];
