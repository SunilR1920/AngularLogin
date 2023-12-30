import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  // validUsername = 'Sunil123';
  // validPassword = 'Sunil@123';

  loginPage: boolean =true;
  registerPage: boolean =false;

  

  
  constructor(private loginService: LoginService, private router: Router) {}
  
  login(): void {
    
    if (this.loginService.login(this.username, this.password)) {
      console.log("Data Pass",this.username + this.password )
      this.router.navigate(['admin']);
    } else {
      alert('Invalid username or password');
    }
    // + " => "+ this.password
  }

  ngOnInit(){ }

  registerForm= new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  })

  registerData(){
    console.log(this.registerForm.value)
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
