import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { HouseComponent } from './HouseManagement/house/house.component';
import { LandComponent } from './LandManagement/land/land.component';
import { ShopComponent } from './ShopManagement/shop/shop.component';
import { from } from 'rxjs';
import { DetailhouseComponent } from './HouseManagement/detailhouse/detailhouse.component';
import { DetaillandComponent } from './LandManagement/detailland/detailland.component';
import { DetailshopComponent } from './ShopManagement/detailshop/detailshop.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddShopComponent } from './ShopManagement/add-shop/add-shop.component';
import { UpdateShopComponent } from './ShopManagement/update-shop/update-shop.component';

import { DeleteShopComponent } from './ShopManagement/delete-shop/delete-shop.component';
import { AddHouseComponent } from './HouseManagement/add-house/add-house.component';
import { UpdateHouseComponent } from './HouseManagement/update-house/update-house.component';
import { DeleteHouseComponent } from './HouseManagement/delete-house/delete-house.component';
import { AddLAndComponent } from './LandManagement/add-land/add-land.component';
import { UpdateLandComponent } from './LandManagement/update-land/update-land.component';
import { DeleteLandComponent } from './LandManagement/delete-land/delete-land.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { AccountService } from './services/account.service';
// search module

import { HouseFilterPipe } from './HouseManagement/house/house-filter.pipe';
import { HouseFilterRoomPipe } from './HouseManagement/house/house-filter-room.pipe';
import { HouseFilterSaloonPipe } from './HouseManagement/house/house-filter-saloon.pipe';
import { HouseFilterAdressPipe } from './HouseManagement/house/house-filter-adress.pipe';
import { HouseFilterPricePipe } from './HouseManagement/house/house-filter-price.pipe';
import { HouseFilterHeatingPipe } from './HouseManagement/house/house-filter-heating.pipe';
import { LandFilterTitlePipe } from './LandManagement/land/land-filter-title.pipe';
import { LandFilterSquaremeterPipe } from './LandManagement/land/land-filter-squaremeter.pipe';
import { LandFilterReconstructionPipe } from './LandManagement/land/land-filter-reconstruction.pipe';
import { ShopFilterTitlePipe } from './ShopManagement/shop/shop-filter-title.pipe';
import { ShopFilterPricePipe } from './ShopManagement/shop/shop-filter-price.pipe';
import { ShopFilterSqaremeterPipe } from './ShopManagement/shop/shop-filter-sqaremeter.pipe';
import { ShopFilterAdressPipe } from './ShopManagement/shop/shop-filter-adress.pipe';
import { ShopFilterHeatingPipe } from './ShopManagement/shop/shop-filter-heating.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    HouseComponent,
    LandComponent,
    ShopComponent,
    DetailhouseComponent,
    DetaillandComponent,
    DetailshopComponent,
    AddShopComponent,
    UpdateShopComponent,
    DeleteShopComponent,
    AddHouseComponent,
    UpdateHouseComponent,
    DeleteHouseComponent,
    AddLAndComponent,
    UpdateLandComponent,
    DeleteLandComponent,
    LoginComponent,
    HouseFilterPipe,
    HouseFilterRoomPipe,
    HouseFilterSaloonPipe,
    HouseFilterAdressPipe,
    HouseFilterPricePipe,
    HouseFilterHeatingPipe,
    LandFilterTitlePipe,
    LandFilterSquaremeterPipe,
    LandFilterReconstructionPipe,
    ShopFilterTitlePipe,
    ShopFilterPricePipe,
    ShopFilterSqaremeterPipe,
    ShopFilterAdressPipe,
    ShopFilterHeatingPipe,
    HomepageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
   

  
  ],
  providers: [AccountService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
