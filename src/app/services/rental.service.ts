import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44327/api/';
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath =this.apiUrl+"Rentals/getall"
    return this.httpClient
    .get<ListResponseModel<Rental>>(newPath)
  }

  getRentalById(rentalId:Number):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"Colors/getbyid?id="+rentalId
    
    return this.httpClient
    .get<ListResponseModel<Rental>>(newPath)
  }
}
