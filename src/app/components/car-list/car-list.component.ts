import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService,private activatedRoute: ActivatedRoute,private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.getCarInfo()
    this.getCarInfoByColor()
    this.getCarById()
  }

  getCarById(){
    this.carService.getCars().subscribe(data => {
      this.activatedRoute.params.subscribe(param=>
        {
          if (param["id"]) {
            this.cars = data.filter((x=>x.id==param["id"]));
          }


        })

    })

  }
//get cars by brand id
  getCarInfo(){
    this.carService.getCars().subscribe(data => {
      this.activatedRoute.params.subscribe(param=>
        {
          if (param["id"]) {
            this.cars = data.filter((x=>x.brandId==param["id"]));
          }
          else{
             this.cars = data;
          }

        })

    })

  }
  getCarInfoByColor(){
    this.carService.getCars().subscribe(data => {
      this.activatedRoute.params.subscribe(param=>
        {
          if (param["id"]) {
            this.cars = data.filter((x=>x.colorId==param["id"]));
          }
          else{
             this.cars = data;
          }

        })

    })

  }

  addToCart(car:Car) {
    this.cartService.addToCart(car);
      this.router.navigateByUrl(`/additional-services/${car.id}`);
    // window.location.href= `/additional-services/${car.id}`//BUNU KULLANMA
  }

  deleteCarById(carId:number) {

    if(confirm("Are you sure to delete ?")){
      this.carService.deleteCar(carId).subscribe(response=>{
        this.getCarName();
        alert("Item has been deleted successfully!")
      })

    }

  }


  getCarName(){
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    })

  }




  // deleteCarById(carId:number) {

  //   if(confirm("Are you sure to delete ?")){
  //     this.carService.deleteCar(carId).subscribe(response=>{
  //       this.getCarName();
  //       alert("Item has been deleted successfully!")
  //     })

  //   }

  // }

}
