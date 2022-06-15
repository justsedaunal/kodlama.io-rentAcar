import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  selectedBrand: Brand

  brands : Brand[]
  car:Car

  constructor(private brandService: BrandService,private router: Router) { }

  ngOnInit(): void {
    this.getBrandName()
  }

  getBrandName(){
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
    })

  }

  deleteBrandById(brandId:number) {

    if(confirm("Are you sure to delete ?")){
      this.brandService.deleteBrand(brandId).subscribe(response=>{
        this.getBrandName();
        alert("Item has been deleted successfully!")
      })

    }

  }



}
