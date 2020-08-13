import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Land} from '../LandManagement/land/land';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class LandService {

  constructor(private http:HttpClient) { }

  path = "http://localhost/Emlak/public/api/land";

getLands():Observable<Land[]>{
  return this.http.get<Land[]>(this.path);
}

getLand(landId):Observable<Land>{
  return this.http.get<Land>(this.path+"/"+landId);
}


addLand(land: Land): Observable<Land> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':"*",
    })
  }
  return this.http.post<Land>(this.path, land,httpOptions)
}



updateLand(land:Land,landId):Observable<Land>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':"*",
    })
  }
  return this.http.put<Land>(this.path+"/"+landId,land,httpOptions);
}


deleteLand(landId):Observable<Land>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':"*",
    })
  }
  return this.http.delete<Land>(this.path+"/"+landId,httpOptions);
}


}
