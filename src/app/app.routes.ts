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
import { RunnerBuyerProfileComponent } from './components/runner-buyer-profile/runner-buyer-profile.component';
import { BecomingRunnerComponent } from './pages/runner/becoming-runner/becoming-runner.component';


export const routes: Routes = [
    {path: 'buyer-login', component: AuthPageComponent},
    {path: 'buyer-register', component: RegisterPageComponent},
    {path: 'runner-list', component: RunnerListPageComponent},
    {path: 'runnerProfile', component:RunnerProfilePageComponent},
    {path: 'productDetails', component: ProductDetailsComponent},
    {path: 'runner-buyer-profile', component:RunnerBuyerProfileComponent},
    {path:'becoming-runner', component: BecomingRunnerComponent },

    //runner path
    {path: 'runner-login', component: RunnerAuthPageComponent},
    {path: 'runner-register', component: RunnerRegisterPageComponent},

    {path: 'cart', component: CartComponent},
    {path: 'checkout', component:CheckoutPageComponent}

];
