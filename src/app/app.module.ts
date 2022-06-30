import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CartSummaryComponent } from './common/cart-summary/cart-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalServicesComponent } from './components/additional-services/additional-services.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient  } from '@angular/common/http';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



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
    ColorAddComponent,
    ColorUpdateComponent,
    CartSummaryComponent,
    AdditionalServicesComponent,
    LoginComponent,
    ReservationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
