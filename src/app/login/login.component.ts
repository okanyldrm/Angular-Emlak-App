import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { AuthService } from '../services/auth.service';
import { LoginUser } from './loginUser';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  loginUser: LoginUser ={
    email:"101",
    password:"101",
  };


  ngOnInit(): void {
  }
  model: User = new User();

  // login(form: NgForm) {
  //   this.accountService.login(this.model);
  //   console.log(this.model.emailAdres);
  //   console.log(this.model.password);
  //   console.log(this.accountService.isLoggedIn());
  // }

  
  login(form:NgForm) {
    this.loginUser.email=this.model.emailAdres;
    this.loginUser.password=this.model.password;
    this.authService.login(this.loginUser);
    
     //console.log(this.model.emailAdres);
     //console.log(this.model.password);
     //console.log(this.loginUser.password);
  }

  logout(){
    
    this.authService.logOut();
   
  }

  get isAuthenticated(){
    return this.authService.loggedIn();
  }
  

}
