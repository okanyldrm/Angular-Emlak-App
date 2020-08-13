import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../house/house';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  constructor(private houseService: HouseService, private _location: Location) { }
  house: House[];
  date: any;
  model: House = new House();

  ngOnInit(): void {
  }

  add(form: NgForm) {
 console.log("Baslık"+form.value.title);
    //  console.log("fiyat"+form.value.price);
    //  console.log("toplammetrekare: "+form.value.squaremeter);
    //  console.log("kullanılanmetrekare: "+form.value.squaremeterofgross);
    // console.log("ısınma: "+form.value.heating);
    //  console.log("aidat: "+form.value.dues);
    //  console.log("yayınlanmatarih: "+form.value.listingDate);
    // console.log("krediyeuygunmu: "+form.value.credit);
    //  console.log("boyalı mı: "+form.value.whitewash);
    //  console.log("katsayısı: "+form.value.numberOfFloor);
    //  console.log("bulundugu kat: "+form.value.floorLocation);
    //  console.log("adres: "+form.value.location);
    //  console.log("cephe: "+form.value.front);
    //  console.log("icerik: "+form.value.content);
     // console.log("ınfo: "+form.value.INFO);
    //  console.log("resim: "+form.value.image);
    //  console.log("asnsör"+form.value.elevator);

    //  console.log("salon sayısı : "+form.value.numberOfSaloon);
    //  console.log("oda sayısı: "+form.value.numberOfRoom);
    //  console.log("banyo sayısı : "+form.value.numberOfBath);
    //  console.log("tuvalet sayıusı : "+form.value.numberOfToilet);
    //  console.log("Balkon sayısı : "+form.value.numberOfBalcony);
    //  console.log("balkon matrekare : "+form.value.squaremetersOfBalcony);
    //  console.log("bina yaşı : "+form.value.ageOfBuilding);
    //  console.log("bahce varmı : "+form.value.garden);

    //  console.log("bahçe metrekare"+form.value.squareOfGarden);
    //  console.log("ulaşım : "+form.value.transportation);
    //  console.log("site içinde mi:  "+form.value.inthesite);
    //  console.log("park varmı : "+form.value.park);
    //  console.log("boş mu : "+form.value.usingStatus);
    //  console.log("emlak tipi"+form.value.propertyType);
   


    this.houseService.addHouse(this.model).subscribe(data => { });
    this.houseService.getHouses().subscribe(data => { this.house = data })
    this.backClicked();
    swal("Başarıyla Eklendi", "", "success");
  }
  backClicked() {
    this._location.back();
  }

}
