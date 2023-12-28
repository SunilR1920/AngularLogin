import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent,
    AdminDashboardComponent,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  goto(){

  }

}
