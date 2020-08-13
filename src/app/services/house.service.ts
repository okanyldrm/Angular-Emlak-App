import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { House } from '../HouseManagement/house/house';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  path = "http://localhost/Emlak/public/api/housing";


  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.path);
  };


  getHouse(houseId):Observable<House>{
    return this.http.get<House>(this.path+"/"+houseId);
  }

  
  addHouse(house: House): Observable<House> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':"*",
      })
    }
    return this.http.post<House>(this.path, house,httpOptions)
  }


  updateHouse(house:House,houseId):Observable<House>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':"*",
      })
    }
    return this.http.put<House>(this.path+"/"+houseId,house,httpOptions);
  }

  deleteHouse(houseId):Observable<House>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':"*",
      })
    }
    return this.http.delete<House>(this.path+"/"+houseId,httpOptions);
  }

}



