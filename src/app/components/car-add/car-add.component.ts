import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  brand:Brand
  brands:Brand[]
  colors:Color[]
  cars:Car[]
  car: Car;
  carAddForm: FormGroup;
  constructor(private carService: CarService, private formBuilder: FormBuilder,private brandService: BrandService,colorService: ColorService) { }

  createCardAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
      colorName: ["", Validators.required],
      brandName: ["", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createCardAddForm();
  }
  addCar() {
    if (this.carAddForm.valid) {
      this.car = Object.assign({}, this.carAddForm.value)
    }
    this.carService.addCar(this.car).subscribe(data => {
      alert(data.description + " Başarıyla Eklendi.")
      location.reload();
    })

  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      debugger
      this.brands = data;
    })
  }
  getColors(){
    this.carService.getColorById().subscribe(data=>{
      debugger

      this.colors = data;
    })
  }


}
