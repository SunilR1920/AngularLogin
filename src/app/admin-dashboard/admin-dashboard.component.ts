import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{


  constructor(private loginSevice: LoginService, private router: Router){}

  ngOnInit(){
    const isLoggedIn=localStorage.getItem('user')
    console.log(isLoggedIn)
    if(!isLoggedIn){
      this.router.navigate(['login']);
    }
  }

  logout(){
    if(this.loginSevice.logout()){
      this.router.navigate(['login']);
    }
  }


}
