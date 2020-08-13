import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // constructor(private accountService:AccountService) { }

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  


  LoggedIn(){
    return this.authService.loggedIn();
  }

  //  logOut(){
  //    this.authService.logOut();
  //  }




}
