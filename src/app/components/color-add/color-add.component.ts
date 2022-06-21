import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  color:Color = new Color();

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
  }

  add(form: NgForm) {
    this.colorService.addColor(this.color).subscribe((data) => {
      alert(data.colorName + 'başarılıyla eklendi');
      window.location.reload();
    });
  }

}
