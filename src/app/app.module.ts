import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandListComponent,
    BrandUpdateComponent,
    BrandAddComponent,
    ColorListComponent,
    CarListComponent,
    CarAddComponent,
    CarUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
