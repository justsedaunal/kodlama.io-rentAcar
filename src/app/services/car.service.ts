import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }



  getCars():Observable<Car[]> {
    return this.httpClient.get<Car[]>("http://localhost:3000/cars")

  }

  addCar(val: Car): Observable<Car> {
    return this.httpClient.post<Car>("http://localhost:3000/cars", val)
  }

  getCarById(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars"+val)
  }
  updateCar(val: Car): Observable<Car> {
    return this.httpClient.put<Car>("http://localhost:3000/cars"+ val.id, val)
  }

  getCar(): Observable<Car[]> {

    return this.httpClient.get<Car[]>("http://localhost:3000/cars");

  }

  getColorById(val:Car):Observable<Car[]> {
    return this.httpClient.get<Car[]>("http://localhost:3000/cars"+val.colorId)
  }


}
