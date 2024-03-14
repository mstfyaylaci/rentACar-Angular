import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';
import { CarDetail } from '../models/carDetail';

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

  getCarsDetail():Observable<ListResponseModel<CarDetail>>{

    let newPath=this.apiUrl+"Cars/getcardetails"
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  
  getCarsByBrandId(brandId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/getcarbybrandiddetails?brandId="+brandId
    
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  
  getCarsByColorId(colorId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/getcarbycoloriddetails?colorId="+colorId
    
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }

  
}