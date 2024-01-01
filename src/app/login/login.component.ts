import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// import { createTheme } from '@mui/material/styles';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // createTheme
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#76ff03',
//       main: '#64dd17',
//       dark: '#1b5e20',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });


export class LoginComponent {
  
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
    const userData= this.loginService.login(this.username, this.password)
    if (userData.isLoggedIn) {
      console.log("Data Pass",userData)
      const user = JSON.stringify(userData)
      localStorage.setItem('user',user)
      this.router.navigate(['admin']);
    } else {
      alert('Invalid username or password');
    }
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
