import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from './house';
import { HouseService } from '../../services/house.service';
import swal from 'sweetalert';



@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [HouseService]
})
export class HouseComponent implements OnInit {

  constructor(
    private houseService:HouseService
    ) { }

  path = "http://localhost/Emlak/public/api/housing";
  houses: House[];
  sayac=0;

  filterText="";
  filterRoom="";
  filterSaloon="";
  filterAdress="";
  filterPrice="";
  filterHeating="";
  
  

  ngOnInit(): void {
    
   this.houseService.getHouses().subscribe(data=>{
     this.houses=data;
   })
  }

}
