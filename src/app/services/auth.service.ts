import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../login/loginUser';

import { Router } from '@angular/router';
import { RegisterUser } from '../login/registerUser';
import { Observable } from 'rxjs';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  path = "http://localhost/Emlak/public/api";
  userToken: any;
  decodedToken: any;
  loggedin=false;
  TOKEN_KEY="token";

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    
    this.httpClient.post(this.path + "/login", loginUser, { headers: headers }).subscribe(data => {
     
      this.saveToken(data['token']);
      this.userToken = data['token'];
     
      swal("Giriş Yapıldı", "Devam etmek için basınız.", "success");
      this.loggedin=true;
      this.router.navigateByUrl('');
     
    });
  }


  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "/register", registerUser, { headers: headers })
    .subscribe(data=>{

    })

  }


  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token)
    //alert(localStorage.getItem(this.TOKEN_KEY))
  }

  logOut(){
   
    localStorage.removeItem(this.TOKEN_KEY);
    
  }

  loggedIn(){
    return this.loggedin;
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }




}
