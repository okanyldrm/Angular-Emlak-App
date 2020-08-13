import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseComponent } from './HouseManagement/house/house.component';
import { LandComponent } from './LandManagement/land/land.component';
import { ShopComponent } from './ShopManagement/shop/shop.component';
import { DetailhouseComponent } from './HouseManagement/detailhouse/detailhouse.component';
import { DetaillandComponent } from './LandManagement/detailland/detailland.component';
import { DetailshopComponent } from './ShopManagement/detailshop/detailshop.component';
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
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  //House Route
  {path:'houses',component:HouseComponent},
  {path:'houses/housedetail/:houseId',component:DetailhouseComponent},
  {path:'houses/addhouse',component:AddHouseComponent,canActivate:[LoginGuard]},
  {path:'houses/houseupdate/:houseId',component:UpdateHouseComponent,canActivate:[LoginGuard]},
  {path:'houses/housedelete/:houseId',component:DeleteHouseComponent,canActivate:[LoginGuard]},
  
  //Shop Route
  {path:'shops',component:ShopComponent},
  {path:'shops/shopdetail/:shopId',component:DetailshopComponent},
  {path:'shops/addshop',component:AddShopComponent,canActivate:[LoginGuard]},
  {path:'shops/shopupdate/:shopId',component:UpdateShopComponent,canActivate:[LoginGuard]},
  {path:'shops/shopdelete/:shopId',component:DeleteShopComponent,canActivate:[LoginGuard]},
  //Land Route
  {path:'lands',component:LandComponent},
  {path:'lands/landdetail/:landId',component:DetaillandComponent},
  {path:'lands/addland',component:AddLAndComponent,canActivate:[LoginGuard]},
  {path:'lands/landupdate/:landId',component:UpdateLandComponent,canActivate:[LoginGuard]},
  {path:'lands/landdelete/:landId',component:DeleteLandComponent,canActivate:[LoginGuard]},
  //login
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:HomepageComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
