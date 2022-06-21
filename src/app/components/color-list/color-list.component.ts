import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]

  constructor(private colorService: ColorService) { }

  colorId=0
  ngOnInit(): void {
    this.getColorName()
  }

  getColorName(){
    this.colorService.getColors().subscribe(data => {
      this.colors = data;
    })

  }

  deleteColorById(colorId:number) {

    if(confirm("Are you sure to delete ?")){
      this.colorService.deleteColor(colorId).subscribe(response=>{
        this.getColorName();
        alert("Item has been deleted successfully!")
      })

    }

  }

}
