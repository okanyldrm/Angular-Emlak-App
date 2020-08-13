import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../house/house';

@Component({
  selector: 'app-detailhouse',
  templateUrl: './detailhouse.component.html',
  styleUrls: ['./detailhouse.component.css'],
  providers: [HouseService]
})
export class DetailhouseComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private houseService: HouseService) { }

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
houseId;
ngOnInit(): void {

  this.activatedRoute.params.subscribe(params => {

    this.houseService.getHouse(params["houseId"]).subscribe(data => {
      this.house = data;

    });

  })





}
  

}
