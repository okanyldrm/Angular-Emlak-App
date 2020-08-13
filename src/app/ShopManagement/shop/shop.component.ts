import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Shop } from './shop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  shops: Shop[];

  model: Shop = new Shop();
  filterTitle="";
  filterPrice="";
  filterSquaremeter="";
  filterAdress="";
  filterHeating="";
  

  ngOnInit(): void {

    this.shopService.getShops().subscribe(data => {
      this.shops = data;
    })

  }


  add(form: NgForm) {
    // console.log("Baslık"+form.value.title);
    // console.log("fiyat"+form.value.price);
    // console.log("toplammetrekare: "+form.value.squaremeter);
    // console.log("kullanılanmetrekare: "+form.value.squaremeterofgross);
    // console.log("ısınma: "+form.value.heating);
    // console.log("aidat: "+form.value.dues);
    // console.log("yayınlanmatarih: "+form.value.listingDate);
    // console.log("krediyeuygunmu: "+form.value.credit);
    // console.log("boyalı mı: "+form.value.whitewash);
    // console.log("katsayısı: "+form.value.numberOfFloor);
    // console.log("bulundugu kat: "+form.value.floorLocation);
    // console.log("adres: "+form.value.location);
    // console.log("cephe: "+form.value.front);
    // console.log("icerik: "+form.value.content);
    // console.log("ınfo: "+form.value.INFO);
    // console.log("resim: "+form.value.image);
   
    this.shopService.addShop(this.model).subscribe(data =>{});

  }




}
