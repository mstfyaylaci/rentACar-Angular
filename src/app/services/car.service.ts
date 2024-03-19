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

  apiUrl='https://localhost:44327/api/Cars/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{

    let newPath=this.apiUrl+"getall"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  
  getCarById(carId:Number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"getbyid?id="+carId
    
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  getCarsDetail():Observable<ListResponseModel<CarDetail>>{

    let newPath=this.apiUrl+"getcardetails"
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  
  getCarsByBrandId(brandId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcarbybrandiddetails?brandId="+brandId
    
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  
  getCarsByColorId(colorId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcarbycoloriddetails?colorId="+colorId
    
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  
  getCarsByBrandAndColor(brandId:number,colorId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcarbybrandandcolor?brandId="+brandId+"&colorId="+colorId
    
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }

  
}