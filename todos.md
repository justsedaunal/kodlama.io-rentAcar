# todos

car update e bak düzgün çalışmıyo
brandId colorId string olarak ekleniyo ona bak
güncellemede brandname colorname güncellenmiyo
ek hizmetler olmuyo
sepet toplama
adres ekleme

<!-- *************/*/ -->
git ve github ı mediumda anlat deadline : 3 temmuz midnight
<!-- *************/*/ -->



component.ts : addToCart (product:Product) 
---------------------------------------------------
service : cart.service 

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }

    removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}

