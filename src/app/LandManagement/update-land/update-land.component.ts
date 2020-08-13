import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandService } from '../../services/land.service';
import { Land } from '../land/land';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-update-land',
  templateUrl: './update-land.component.html',
  styleUrls: ['./update-land.component.css']
})
export class UpdateLandComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private landService: LandService, private _location: Location) { }

  land: Land = {
    id: 0,
    title: "101",
    squaremeter: 101,
    price: 101,
    slope: 101,
    location: "101",
    reconstruction: "101",
    sowing: 101,
    road: 101,
    INFO: "101",
    image: "101"
  };
  
  model: Land = new Land();
  lands: Land[];

  ngOnInit(): void {
    this.getland();
  }

 getland() {


    this.activatedRoute.params.subscribe(params => {
      this.landService.getLand(params["landId"]).subscribe(data => {
        this.land = data;
      });
    })
  }

  update(form: NgForm) {
    console.log("Baslık"+form.value.title);
  
    this.activatedRoute.params.subscribe(params => {

      this.landService.updateLand(this.model, params["landId"]).subscribe(data => { });
      swal("Başarıyla Güncellendi", "", "success");
      this.backClicked();
      this.landService.getLands().subscribe(data => {
        this.lands = data;
      })

    })



  }
  
  backClicked() {
    this._location.back();
  }




}
