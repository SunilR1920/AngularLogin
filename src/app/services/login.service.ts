import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn: boolean = false;

  constructor() { }
http = inject(HttpClient)

  registerdata(data:any){
    return this.http.post("http://localhost:3000/profile",data)
  }

  verifyUser(){
    return this.http.get("http://localhost:3000/profile/")
  }

  login(username: string, password: string){
    // Implement your authentication logic here
    // For simplicity, assume a hardcoded username and password
    var userData= {isLoggedIn : false}
    this.verifyUser().subscribe((result: any)=>{
      console.log("Werify",result)
      result && result.length > 0 && result.forEach((user: any) => {
        
        if (user && user.username === username && user.password === password) {
          this.isLoggedIn = true;
          userData= {...user, isLoggedIn: true};
          console.log("user",user)
        }
      });
      return true;
    })
    console.log("Login Service",userData)
    return userData;
  }
  logout(){
    
    localStorage.setItem('user','')
    return true;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  
}
