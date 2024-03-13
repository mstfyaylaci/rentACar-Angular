import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl='https://localhost:44327/api/';

  constructor(private httpClient:HttpClient) { }


  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"Colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
  getColorById(colorId:Number):Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"Colors/getbyid?id="+colorId
    
    return this.httpClient
    .get<ListResponseModel<Color>>(newPath)
  }
}
