import { Component, OnInit } from '@angular/core';
import { LandService } from '../../services/land.service';
import { Land } from '../land/land';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import swal from 'sweetalert';



@Component({
  selector: 'app-add-land',
  templateUrl: './add-land.component.html',
  styleUrls: ['./add-land.component.css']
})
export class AddLAndComponent implements OnInit {

  constructor(private landService: LandService, private _location: Location) { }
  land: Land[];
  date: any;
  model: Land = new Land();
  ngOnInit(): void {
  }

  add(form: NgForm) {
   // console.log("Baslık"+form.value.title);
       //  console.log("fiyat"+form.value.price);
      
   
       this.landService.addLand(this.model).subscribe(data => { });
       this.landService.getLands().subscribe(data => { this.land = data })
       this.backClicked();
       swal("Başarıyla Eklendi","", "success");
     }
     backClicked() {
       this._location.back();
     }

}
