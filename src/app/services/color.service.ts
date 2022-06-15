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

  }}
