import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44327/api/';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{

    let newPath=this.apiUrl+"Customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }

  // getCustomerById(customerId:Number):Observable<ListResponseModel<Customer>>{
  //   let newPath=this.apiUrl+"Customers/getbyid?id="+customerId
    
  //   return this.httpClient
  //   .get<ListResponseModel<Customer>>(newPath)
  // }
}
