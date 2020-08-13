import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandService } from '../../services/land.service';
import { Land } from '../land/land';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-delete-land',
  templateUrl: './delete-land.component.html',
  styleUrls: ['./delete-land.component.css']
})
export class DeleteLandComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private landService: LandService,private _location: Location) { }

  
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
    lands:Land[];

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.landService.deleteLand(params["landId"]).subscribe(data => {});
      })
      swal("Başarıyla Silindi", "", "success");
      this.backClicked();
      this.landService.getLands().subscribe(data => {
        this.lands = data;
      })
    }
    backClicked() {
      this._location.back();
    }

}
