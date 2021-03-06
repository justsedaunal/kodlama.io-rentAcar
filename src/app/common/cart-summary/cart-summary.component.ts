import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[]=[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
    console.log(this.cartItems)
  }

  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
    alert("Silindi" + car.brandName + " sepetten silindi.")
  }
}
