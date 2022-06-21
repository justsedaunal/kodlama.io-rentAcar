import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }
  getCars():Observable<Car[]> {
    return this.httpClient.get<Car[]>("http://localhost:3000/cars/")
  }

  addCar(val: Car): Observable<Car> {
    return this.httpClient.post<Car>("http://localhost:3000/cars/", val)
  }
  updateCar(val: Car): Observable<Car> {
    return this.httpClient.put<Car>("http://localhost:3000/cars/"+ val.id, val)
  }
  getCarById(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars/"+val)
  }

  getRentCarById(selectedCarId:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars" + ("?id=") + selectedCarId
    return this.httpClient.get<Car[]>(newPath)
  }

  deleteCar(carId:number) :Observable<Car>{
    return this.httpClient.delete<Car>("http://localhost:3000/cars/"+carId)
  }





  // getColorById(val:Car):Observable<Car[]> {
  //   return this.httpClient.get<Car[]>("http://localhost:3000/cars/"+val.colorId)
  // }

  // getCar(): Observable<Car[]> {
  //   return this.httpClient.get<Car[]>("http://localhost:3000/cars/");
  // }

}
