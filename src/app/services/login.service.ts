import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn: boolean = false;


  login(username: string, password: string): boolean {
    // Implement your authentication logic here
    // For simplicity, assume a hardcoded username and password
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
  logout(): void {
    this.isLoggedIn = false;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  constructor() { }
}
