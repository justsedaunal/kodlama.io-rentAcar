import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    colorName: new FormControl("", [Validators.required]),
  })

  constructor(private colorService: ColorService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getColorById();
  }

  getColorById() {

    this.activatedRoute.params.subscribe(params => {
      if (params["id"])

         this.colorService.getColorById(params["id"]).subscribe(data => {
          this.colorUpdateForm.controls["id"].setValue(data.id);
          this.colorUpdateForm.controls["colorName"].setValue(data.colorName);
        })
    })
  }

  update() {
    if (this.colorUpdateForm.valid) {
      this.colorService.updateColor(this.colorUpdateForm.value).subscribe(data => {
        alert(data.colorName+ " başarılıyla güncellendi")
      })

    }
  }

}
