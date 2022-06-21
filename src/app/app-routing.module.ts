import { CanExitGuard } from './guards/can-exit.guard';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { AdditionalServicesComponent } from './components/additional-services/additional-services.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';


const routes: Routes = [
  {path:"",  component:CarListComponent},
  {path:"brand-update/:id",  component:BrandUpdateComponent},
  {path:"brand-add",  component:BrandAddComponent,canActivate:[LoginGuard],canDeactivate:[CanExitGuard]},
  {path:"brands",  component:CarListComponent},
  {path:"brands/:id",  component:CarListComponent},
  {path:"colors/:id",  component:CarListComponent},
  {path:"car-add",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"car-update/:id",component:CarUpdateComponent},
  {path:"color-add",component:ColorAddComponent},
  {path:"color-update/:id",component:ColorUpdateComponent},
  {path:"additional-services/:id",component:AdditionalServicesComponent},
  {path:"login",component:LoginComponent},
  {path:"login/:returnUrl",component:LoginComponent},//henüz çalışmıyo bakılacak
  {path:"reservation-page",component:ReservationPageComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
