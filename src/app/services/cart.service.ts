import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car: Car) {
    let item = CartItems.find(c => c.car.id === car.id);
    if (item) {
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.totalPrice = car.dailyPrice
      CartItems.push(cartItem)
    }
  }

  removeFromCart(car: Car) {
    let item: CartItem = CartItems.find(c => c.car.id === car.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  list(): CartItem[] {
    console.log(CartItems)
    return CartItems;
  }
}
