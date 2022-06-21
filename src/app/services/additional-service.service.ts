import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalService } from '../models/additionalService';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {

  constructor(private httpClient: HttpClient) { }

  getAdditionalServices():Observable<AdditionalService[]>{
   return this.httpClient.get<AdditionalService[]>("http://localhost:3000/additionalServices")
  }

  addToCart(additionalService:AdditionalService){

    let item = CartItems.find(c=>c.additionalService.id===additionalService.id);
    console.log(additionalService.id)
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.additionalService = additionalService;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }

  getCarByAdditionalServiceId(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/additional-services/"+val)
  }


}
