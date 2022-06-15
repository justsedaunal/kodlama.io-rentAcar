import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {


  brandUpdateForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  })

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrandById();
  }
  getBrandById() {

    this.activatedRoute.params.subscribe(params => {
      if (params["id"])

         this.brandService.getBrandById(params["id"]).subscribe(data => {
          this.brandUpdateForm.controls["id"].setValue(data.id);
          this.brandUpdateForm.controls["name"].setValue(data.name);
          this.brandUpdateForm.controls["image"].setValue(data.image);
        })
    })
  }

  update() {
    if (this.brandUpdateForm.valid) {
      this.brandService.updateBrand(this.brandUpdateForm.value).subscribe(data => {
        alert(data.name + " başarılıyla güncellendi")
      })

    }
  }



}
