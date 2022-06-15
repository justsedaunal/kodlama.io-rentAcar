import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';

const routes: Routes = [
  {path:"",  component:CarListComponent},
  {path:"brand-update/:id",  component:BrandUpdateComponent},
  {path:"brand-add",  component:BrandAddComponent},
  {path:"brands",  component:CarListComponent},
  {path:"brands/:id",  component:CarListComponent},
  {path:"colors/:id",  component:CarListComponent},
  {path:"car-add",component:CarAddComponent},
  {path:"car-update",component:CarUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
