import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../shop/shop';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-delete-shop',
  templateUrl: './delete-shop.component.html',
  styleUrls: ['./delete-shop.component.css']
})
export class DeleteShopComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private shopService: ShopService,private _location: Location) { }
    shops: Shop[];
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
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.shopService.deleteShop(params["shopId"]).subscribe(data => {});
    })
    swal("Başarıyla Silindi", "", "success");
    this.backClicked();
    this.shopService.getShops().subscribe(data => {
      this.shops = data;
    })
  }


  backClicked() {
    this._location.back();
  }

}
