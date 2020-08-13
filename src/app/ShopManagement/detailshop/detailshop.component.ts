import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../shop/shop';

declare var $: any;
@Component({
  selector: 'app-detailshop',
  templateUrl: './detailshop.component.html',
  styleUrls: ['./detailshop.component.css']
})
export class DetailshopComponent implements OnInit {
  
  constructor(private activatedRoute:ActivatedRoute,
    private shopService:ShopService) { }


    
    shop: Shop={
      id:0,
      title:"null",
      squaremeter:101,
      squaremeterofgross:101,
      price:101,
      heating:"null",
      dues:101,
      listingDate:"null",
      credit:"null",
      whitewash:"null",
      numberOfFloor:101,
      floorLocation:101,
      location:"null",
      front:"null",
      content:"null",
      INFO:"null",
      image:"null",
  
    };
    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.shopService.getShop(params["shopId"]).subscribe(data=>{
        this.shop=data;
      });
  
    })
  
  }
 

}
