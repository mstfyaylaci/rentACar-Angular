import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[] = []
  carImageDetail:CarImage[]=[]
  baseUrl="https://localhost:44327/Uploads/Images/";

  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService
  ) { }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"])
        this.gerCarImagesByCarId(params["carId"])
      }
      else {
        return;

      }
    })
  }


  getCarDetailsByCarId(carId: number) {
    this.carDetailService.getCarDetailsByCarId(carId).subscribe((response) => {
      
      this.carDetails = response.data
      
    })

  }

  gerCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe(response=>{
      
      this.carImageDetail=response.data
      console.log(response.data);
      
      
    })
  }
}
