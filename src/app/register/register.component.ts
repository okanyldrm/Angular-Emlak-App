import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { RegisterUser } from '../register/User';
import swal from 'sweetalert';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerservice: RegisterService,private _location: Location) { }
  model: RegisterUser = new RegisterUser();
  ngOnInit(): void {
  }


  adduser(form: NgForm) {
    this.registerservice.addUser(this.model).subscribe(data => { });
    swal("Başarıyla Eklendi", "", "success");
    this.backClicked();

  }

  backClicked() {
    this._location.back();
  }

}
