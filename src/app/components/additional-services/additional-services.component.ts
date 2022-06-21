import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionalService } from 'src/app/models/additionalService';
import { Car } from 'src/app/models/car';
import { AdditionalServiceService } from 'src/app/services/additional-service.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css']
})
export class AdditionalServicesComponent implements OnInit {

  additionalServices:AdditionalService[]
  selectedCarId:number
  cars: Car[]
  constructor(private additionalService: AdditionalServiceService,private activatedRoute: ActivatedRoute,private carService: CarService) { }

  ngOnInit(): void {
   // this.getRentCarsById();
   this.getAdditionalService()
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

  getAdditionalService(){
    this.additionalService.getAdditionalServices().subscribe(data => {
      this.additionalServices = data;
    })

  }


  addToCart(additionalService:AdditionalService) {
    this.additionalService.addToCart(additionalService);
      //this.router.navigateByUrl(`/additional-services/${additionalService.id}`);
    // window.location.href= `/additional-services/${car.id}`//BUNU KULLANMA
  }



  // getRentCarsById(){
  //   this.activatedRoute.params.subscribe(params =>{
  //     if(params['id']) this.selectedCarId=params['id'];
  //   })
  //   if(this.selectedCarId==undefined){
  //     this.carService.getCars().subscribe(data => {
  //       this.cars = data;
  //     })
  //   }
  //   else{
  //     this.carService.getRentCarById(this.selectedCarId).subscribe(data =>{
  //       this.cars = data
  //       console.log(this.selectedCarId)
  //     })
  //   }
  // }



}
