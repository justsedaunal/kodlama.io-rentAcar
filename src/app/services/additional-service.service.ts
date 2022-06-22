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

  getAdditionalServices(): Observable<AdditionalService[]> {
    return this.httpClient.get<AdditionalService[]>("http://localhost:3000/additionalServices")
  }

  addToCart(additionalService: AdditionalService, carId: number) {
    let cartItems = CartItems

    let cartItem = cartItems.filter(item => item.car.id == carId)[0]
    console.log(cartItem)
    let additionalServiceItems = cartItem.additionalService
    if (additionalServiceItems == undefined) {
      cartItem.additionalService = []
    }

    cartItem.additionalService.push(additionalService)
    let additionalTotalPrice = 0
    cartItem.additionalService.forEach(item => {
      additionalTotalPrice = additionalTotalPrice + item.price

    })
    cartItem.totalPrice = cartItem.car.dailyPrice + additionalTotalPrice

  }

  getCarByAdditionalServiceId(val: number): Observable<Car> {
    return this.httpClient.get<Car>("http://localhost:3000/additional-services/" + val)
  }

  removeAdditionalService(carId: number, additionalServiceId: number) {
    let cartItem = CartItems.filter(item => item.car.id == carId)[0]
    cartItem.additionalService = cartItem.additionalService.filter(item => item.id != additionalServiceId)

    let additionalTotalPrice = 0
    cartItem.additionalService.forEach(item => {
      additionalTotalPrice = additionalTotalPrice + item.price

    })
    cartItem.totalPrice = cartItem.car.dailyPrice + additionalTotalPrice

  }



}
