# RentACar
rent a car 
her gün pair programming şeklinde proje kodlaması yapılacak.her gün pairler değişecek
------sıfırdan api oluştur.
brand(marka)--->id,name,image(audinin logosu)

imageları assettsin içine koy

bootstrap kullan

araba markası leftsidebar with logo list
**----------------------------------------------------------**

markanın yanında buton olcak güncelleye git ürün detayı olcak 
sil butonu olsun emin misin diye alert versin


**----------------------------------------------------------**

renkleri menüde listele

arabaları listele

araba modelini oluştur(id,brandId,colorId,colorName,brandName,dailyPrice,description)

markaya tıklayınca o arabaları listele

renge tıklayınca o renge ait arabaları listele

araba crud işlemleri yap

**-----------------------------------------------------------**
arabaralara kirala butonu koy.Gelen ekranda müşterinin seçebileceği ek hizmetleri
listele.ek hizmetler : bebek koltuğu,scooter vs

enterprise a bak ek hizmetler için



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
-----------------model--------------------------------
export class CartItem{
    product:Product;
    quantity:number;
}

export const CartItems:CartItem[]=[];//veri tabanında kaydetmek istemiyorum localde tutmak istiyorum.

---------------------*cart-summary component*----------------
cartItems:CartItem[]=[];
constructor(private cartService:CartService){}
getCartItems(){
  this.cartItems =  this.cartService.list();
}



**------------------------------*******************


apide user 
login olduğunda kullanıcıyı adminse yönlendir değilse kullanıcı bulunamadı de

arabayla igili bilgileri girerken vazgeçtin eminse başka sayfaya gönder değilse canDeactive le işlemi yap


*-----------------------********************------------------------------------------------------
müşteriler iki adet adres girebilir 
yerleşim adresi
fatura adresi 
fatura adresi farklı yerleşim adresi farklı olacak 
şehirler dropdown olcak
apide address diye bişey olsun şehirlerin id si olsun 

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







 