import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  brands : Brand[]
  colors : Color[]


  carUpdateForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    brandId: new FormControl("" ),
    colorId: new FormControl(""),
    brandName: new FormControl("", [Validators.required]),
    colorName: new FormControl("", [Validators.required]),
    dailyPrice: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  })
  constructor(private carService: CarService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,private colorService: ColorService,private brandService: BrandService) { }
  ngOnInit(): void {
    this.getCarById()
    this.getBrands()
    this.getColors()
  }

  getCarById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.carService.getCarById(params['id']).subscribe((data) => {
          this.carUpdateForm.controls['id'].setValue(data.id);
          this.carUpdateForm.controls['brandId'].setValue(data.brandId);
          this.carUpdateForm.controls['colorId'].setValue(data.colorId);
          this.carUpdateForm.controls['dailyPrice'].setValue(data.dailyPrice);
          this.carUpdateForm.controls['description'].setValue(data.description);
          this.carUpdateForm.controls['brandName'].setValue(data.brandName);
          this.carUpdateForm.controls['colorName'].setValue(data.colorName);
        });
    });
  }


  updateCar() {
    if (this.carUpdateForm.valid) {
      this.carService.updateCar(this.carUpdateForm.value).subscribe(data => {
        alert(data + " başarılıyla güncellendi")
      })

    }
  }

  getBrands() {
    this.brandService.getBrands().subscribe(data => {

      this.brands = data;
    })
  }
  getColors() {
    this.colorService.getColors().subscribe(data => {
      // this.carUpdateForm.controls["colorId"].setValue("colorName")
      //form            formdaki kontrol            yeni değer

      this.colors = data;
    })
  }
}
