import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit{
  
  fullname: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  showPassword: boolean = false;

  loginPage: boolean =true;
  registerPage: boolean =false;


  data={
    fullname: this.fullname,
    email: this.email,
    username: this.username,
    password: this.password,
  }

  constructor(private loginService: LoginService, private router: Router) { }
  
  login(): void {
    let userData= {isLoggedIn: false}

    this.loginService.verifyUser().subscribe((result: any)=>{
      console.log("Werify",result)
      result && result.length > 0 && result.forEach((user: any) => {
        
        if (user && user.username === this.username && user.password === this.password) {
          
          userData= {...user, isLoggedIn: true};
          console.log("user",user)
          const userDetail = JSON.stringify(userData)
          localStorage.setItem('user',userDetail)
          this.router.navigate(['admin']);
        }
        else {
          alert('Invalid username or password');
        }
      });
    }, (error)=>{
      alert('Invalid username or password 2');
    })
  }
 
  ngOnInit(){ }


  registerUser(){
    this.loginService.registerdata(this.data).subscribe((result:any) =>{
      console.log(result)
    })
  }



  VisibilityLogin(){
    this.loginPage = true;
    this.registerPage= false;
    
  }

  VisibilityRegister(){
    this.registerPage= true;
    this.loginPage = false;
    
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
