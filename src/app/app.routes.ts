import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent,
        title: 'Login page'
    },
    {
        path:'admin',
        component: AdminDashboardComponent,
        title: 'Admin Page'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}