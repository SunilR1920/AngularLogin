import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    // AppComponent,
    // LoginComponent,
    // AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
//   bootstrap: [AppComponent]
})
export class AppModule { }