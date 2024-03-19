import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl='https://localhost:44327/api/Cars/';
  constructor(private httpClient:HttpClient) { }


  getAllCarDetails():Observable<ListResponseModel<CarDetail>>{

    let newPath=this.apiUrl+"getcardetails"
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{

    let newPath=this.apiUrl+"getcardetailsid?carId="+carId
    return this.httpClient
            .get<ListResponseModel<CarDetail>>(newPath)
    
  }
}
