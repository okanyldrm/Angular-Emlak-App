import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../shop/shop';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
// import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
// import { PICK_FORMATS } from './format-datepicker';
// import {PickDateAdapter} from './format-datepicker';
import swal from 'sweetalert';



@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css'],
  providers: [
    // {provide: DateAdapter, useClass: PickDateAdapter},
    // {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ]
})
export class AddShopComponent implements OnInit {
  date: any;
  constructor(private shopService: ShopService, private _location: Location) { }
  shops: Shop[];

  model: Shop = new Shop();
  ngOnInit(): void {
  }


  add(form: NgForm) {
    // console.log("Baslık"+form.value.title);
    // console.log("fiyat"+form.value.price);
    // console.log("toplammetrekare: "+form.value.squaremeter);
    // console.log("kullanılanmetrekare: "+form.value.squaremeterofgross);
    //console.log("ısınma: "+form.value.heating);
    // console.log("aidat: "+form.value.dues);
    // console.log("yayınlanmatarih: "+form.value.listingDate);
    //console.log("krediyeuygunmu: "+form.value.credit);
    // console.log("boyalı mı: "+form.value.whitewash);
    // console.log("katsayısı: "+form.value.numberOfFloor);
    // console.log("bulundugu kat: "+form.value.floorLocation);
    // console.log("adres: "+form.value.location);
    // console.log("cephe: "+form.value.front);
    // console.log("icerik: "+form.value.content);
    // console.log("ınfo: "+form.value.INFO);
    // console.log("resim: "+form.value.image);


    this.shopService.addShop(this.model).subscribe(data => { });
    
    this.backClicked();
    this.shopService.getShops().subscribe(data => {
      this.shops = data;
    })
    swal("Başarıyla Eklendi","", "success");
    
  }

  backClicked() {
    this._location.back();
  }
 

}
