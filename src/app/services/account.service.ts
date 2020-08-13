import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AccountService {

  constructor(private http : HttpClient) { }
  loggedIn=false;





  login(user: User): boolean {
    if (user.emailAdres == "okan@123" && user.password == "12345") {
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.emailAdres);
      return true;
    }
    return false;
  }




  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }


}
