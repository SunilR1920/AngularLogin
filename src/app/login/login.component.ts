import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  fullname: string = '';
  username: string = '';
  password: string = '';

  // validUsername = 'Sunil123';
  // validPassword = 'Sunil@123';

  loginPage: boolean =true;
  registerPage: boolean =false;

  
  constructor(private loginService: LoginService, private router: Router) {}
  
  login(): void {
    console.log(this.username + " => "+ this.password )
    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['admin']);
    } else {
      alert('Invalid username or password');
    }
  }

  ngOnInit(){ }

  VisibilityLogin(){
    this.loginPage = true;
    this.registerPage= false;
    console.log(this.loginPage)
    alert("This is Work")
  }

  VisibilityRegister(){
    this.registerPage= true;
    this.loginPage = false;
    console.log(this.registerPage)
  }

}
