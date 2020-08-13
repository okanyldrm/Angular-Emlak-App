import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandService } from '../services/land.service';
import { Land } from '../LandManagement/land/land';

@Component({
  selector: 'app-detailland',
  templateUrl: './detailland.component.html',
  styleUrls: ['./detailland.component.css'],
  providers:[LandService]
})
export class DetaillandComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private houseService:LandService) { }


land:Land;


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      this.houseService.getLand(params["landId"]).subscribe(data=>{
        this.land=data;
        
      });
  
    })
   

  }

}
