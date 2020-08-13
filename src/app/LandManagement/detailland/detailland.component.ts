import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandService } from '../../services/land.service';
import { Land } from '../land/land';

@Component({
  selector: 'app-detailland',
  templateUrl: './detailland.component.html',
  styleUrls: ['./detailland.component.css'],
  providers:[LandService]
})
export class DetaillandComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private houseService:LandService) { }


land:Land = {
id:101,
title:"101",
price:101,
squaremeter:101,
sowing:101,
slope:101,
reconstruction:"101",
location:"101",
road:101,
image:"101",
INFO:"101"};


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      this.houseService.getLand(params["landId"]).subscribe(data=>{
        this.land=data;
      });
  
    })
   

  }

}
