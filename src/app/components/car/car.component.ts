import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  dataLoaded=false;
  carsDetails:CarDetail[]=[];
constructor(private carService:CarService ,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
        
      }
      else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"])
        
      }
      else{
        this.getCarsDetails()
      }
    })
    
    
  }

  getCars(){
    this.carService.getCars().subscribe( (response) => {
      this.cars=response.data
      
      this.dataLoaded=true;
    });
  }

  getCarsDetails(){
    this.carService.getCarsDetail().subscribe((response)=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
      console.log(this.carsDetails);
    })
  }
  getCarById(carId:Number){
    this.carService.getCarById(carId).subscribe( (response) => {
      this.cars=response.data
      
      this.dataLoaded=true    
    })
  }

  getCarsByBrandId(brandsId:Number){
    this.carService.getCarsByBrandId(brandsId).subscribe( (response) => {
      this.carsDetails=response.data
      
      this.dataLoaded=true    
    })
  }
  getCarsByColorId(colorId:Number){
    this.carService.getCarsByColorId(colorId).subscribe( (response) => {
      this.carsDetails=response.data
      console.log(this.carsDetails);
      this.dataLoaded=true    
    })
  }

}
