import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44327/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{

    let newPath=this.apiUrl+"Cars/getall"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  
  getCarById(carId:Number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getbyid?id="+carId
    
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrandId(brandId:Number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getcarsbybrandid?id="+brandId
    
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColorId(colorId:Number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getcarsbycolorid?id="+colorId
    
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  
}
