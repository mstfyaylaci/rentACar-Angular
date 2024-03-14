import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl='https://localhost:44327/api/';
  constructor(private httpClient:HttpClient) { }


  getAllCars():Observable<ListResponseModel<CarDetail>>{

    let newPath=this.apiUrl+"Cars/getcardetails"
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
}
