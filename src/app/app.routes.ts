import { Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container/login-container.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

export const routes: Routes = [
    { path: 'login', component: LoginContainerComponent },
    { path: 'dashboard', component: DashboardContainerComponent },
    { path: '**', redirectTo: '/login' }, // MUST BE LAST: Redirect any unknown paths to /login
];
