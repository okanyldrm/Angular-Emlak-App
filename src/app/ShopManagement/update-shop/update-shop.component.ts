import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../shop/shop';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.component.html',
  styleUrls: ['./update-shop.component.css']
})
export class UpdateShopComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private shopService: ShopService, private _location: Location) { }


  shop: Shop = {
    id: 0,
    title: "101",
    squaremeter: 101,
    squaremeterofgross: 101,
    price: 101,
    heating: "101",
    dues: 101,
    listingDate: "101",
    credit: "101",
    whitewash: "101",
    numberOfFloor: 101,
    floorLocation: 101,
    location: "101",
    front: "101",
    content: "101",
    INFO: "101",
    image: "101",

  };
  model: Shop = new Shop();
  shops: Shop[];
  ngOnInit(): void {
    this.getshop();

  }

  getshop() {
    this.activatedRoute.params.subscribe(params => {
      this.shopService.getShop(params["shopId"]).subscribe(data => {
        this.shop = data;
      });
    })
  }


  update(form: NgForm) {
    //console.log("Baslık"+form.value.title);
    //console.log("fiyat"+form.value.price);
    //console.log("toplammetrekare: "+form.value.squaremeter);
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
    this.activatedRoute.params.subscribe(params => {

      this.shopService.updateShop(this.model, params["shopId"]).subscribe(data => { });
      swal("Başarıyla Güncellendi", "", "success");
      this.backClicked();
      this.shopService.getShops().subscribe(data => {
        this.shops = data;
      })

    })



  }
  
  backClicked() {
    this._location.back();
  }


}
