import { Routes } from '@angular/router';
import { AuthPageComponent } from './pages/buyer/auth-page/auth-page.component';
import { RegisterPageComponent } from './pages/buyer/register-page/register-page.component';
import { RunnerListPageComponent } from './pages/buyer/runner-list-page/runner-list-page.component';
import { RunnerProfilePageComponent } from './pages/buyer/runner-profile-page/runner-profile-page.component';
import { ProductDetailsComponent } from './pages/buyer/product-details/product-details.component';
import { RunnerRegisterPageComponent } from './pages/runner/runner-register-page/runner-register-page.component';
import { RunnerAuthPageComponent } from './pages/runner/runner-auth-page/runner-auth-page.component';
import { CartComponent } from './pages/buyer/cart/cart.component';
import { CheckoutPageComponent } from './pages/buyer/checkout-page/checkout-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './pages/buyer/forgot-password/forgot-password.component';
import { OrderDetailsPageComponent } from './pages/runner/order-details-page/order-details-page.component';


export const routes: Routes = [
    {path: 'buyer-login', component: AuthPageComponent},
    {path: 'buyer-register', component: RegisterPageComponent},
    {path: 'runner-list', component: RunnerListPageComponent},
    {path: 'runnerProfile', component:RunnerProfilePageComponent},
    {path: 'productDetails', component: ProductDetailsComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: '', redirectTo: '/', pathMatch: 'full' },

    {path: '', component: LandingPageComponent},

    //runner path
    {path: 'runner-login', component: RunnerAuthPageComponent},
    {path: 'runner-register', component: RunnerRegisterPageComponent},
    {path: 'runner-orders', component: OrderDetailsPageComponent},

    {path: 'cart', component: CartComponent},
    {path: 'checkout', component:CheckoutPageComponent}

];
