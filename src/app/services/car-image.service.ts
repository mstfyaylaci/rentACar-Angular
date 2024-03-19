import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44327/api/CarImages/';
  constructor(private httpClient:HttpClient) { }


  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"getall" 
    return this.httpClient
    .get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"getbycarid?carId="+carId 
    
    return this.httpClient
    .get<ListResponseModel<CarImage>>(newPath)
  }

  
}
