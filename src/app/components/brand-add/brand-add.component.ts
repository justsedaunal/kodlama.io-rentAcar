import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brand:Brand = new Brand();

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
  }

  add(form: NgForm) {
    this.brandService.addBrand(this.brand).subscribe((data) => {
      alert(data.name + 'başarılıyla eklendi');
      window.location.reload();
    });
  }

}
