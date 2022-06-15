import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarInfo()

  }

  getCarInfo(){
    this.carService.getCars().subscribe(data => {
      this.activatedRoute.params.subscribe(param=>
        {
          if (param["id"]) {
            this.cars = data.filter(x=>x.brandId==param["id"]);
          }
          else{
             this.cars = data;
          }

        })

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
