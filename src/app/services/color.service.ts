import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }


  getColors():Observable<Color[]> {
    return this.httpClient.get<Color[]>("http://localhost:3000/colors")

  }

  getColorById(colorId:number):Observable<Color>{
    return this.httpClient.get<Color>("http://localhost:3000/colors/"+colorId)
  }

  deleteColor(colorId:number) :Observable<Color>{
    return this.httpClient.delete<Color>("http://localhost:3000/colors/"+colorId)
  }

  addColor(color: Color): Observable<Color> {
    return this.httpClient.post<Color>('http://localhost:3000/colors', color);
  }
  updateColor(color:Color):Observable<Color>{
    return this.httpClient.put<Color>("http://localhost:3000/colors/"+color.id,color)
  }


}
