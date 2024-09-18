import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TouristAttractionsComponent } from './pages/tourist-attractions/tourist-attractions.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        component: MasterComponent,
        canActivate: [authGuard],

        children: [
            { path: '', component: HomeComponent },
            { path: 'tourist-attractions', component: TouristAttractionsComponent },
            { path: 'dashboard', component: DashboardComponent }
        ],
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },

];
