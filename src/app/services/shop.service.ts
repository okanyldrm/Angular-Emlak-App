import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../ShopManagement/shop/shop';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  path = "http://localhost/Emlak/public/api/shop";
  

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.path);
  }

  getShop(shopId): Observable<Shop> {
    return this.http.get<Shop>(this.path + "/" + shopId);
  }


  addShop(shop: Shop): Observable<Shop> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':"*",
      })
    }
    return this.http.post<Shop>(this.path, shop,httpOptions)
  }

  updateShop(shop:Shop,shopId):Observable<Shop>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':"*",
      })
    }
    return this.http.put<Shop>(this.path+"/"+shopId,shop,httpOptions);
  }

  deleteShop(shopId):Observable<Shop>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':"*",
      })
    }
    return this.http.delete<Shop>(this.path+"/"+shopId,httpOptions);
  }
  
 
 
  ngOnInit() {
  
 }





}
