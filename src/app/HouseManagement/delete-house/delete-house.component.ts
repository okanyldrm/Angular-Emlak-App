import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../house/house';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-delete-house',
  templateUrl: './delete-house.component.html',
  styleUrls: ['./delete-house.component.css']
})
export class DeleteHouseComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private houseService: HouseService,private _location: Location) { }
    houses: House[];
    house: House ={
      id: 101,
      title: "null",
      numberOfSaloon: 101,
      numberOfRoom: 101,
      numberOfBath: 101,
      numberOfToilet: 101,
      numberOfBalcony: 101,
      squaremetersOfBalcony: 101,
      squaremeter: 101,
      squaremeterOfGross: 101,
      front: "null",
      price: 101,
      images: "null",
      whitewash: "null",
      location: "null",
      ageOfBuilding: "null",
      numberOfFloor: 101,
      content: "null",
      floorLocation: "null",
      garden: "null",
      squareOfGarden: 101,
      transportation: "null",
      inthesite: "null",
      park: "null",
      usingStatus: "null",
      credit: "null",
      listingDate: "null",
      goods: "null",
      heating: "null",
      dues: 101,
      propertyType: "null",
      elevator: "null",
      INFO: "null",
      image: "null",
    };
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.houseService.deleteHouse(params["houseId"]).subscribe(data => {});
    })
    swal("Başarıyla Silindi", "", "success");
    this.backClicked();
    this.houseService.getHouses().subscribe(data => {
      this.houses = data;
    })
  }
  
  backClicked() {
    this._location.back();
  }

}
