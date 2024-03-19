import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarImageService } from 'src/app/services/car-image.service';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  carsDetails: CarDetail[] = [];
  carImages: CarImage[] = [];
  brands: Brand[];
  colors: Color[];
  
  carFilterText = "";

  selectedBrand: number = 0
  selectedColor: number = 0
  
  dataLoaded = false;

  imageOfPath: string;
  baseUrl = "https://localhost:44327/Uploads/Images/";



  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private brandService: BrandService,
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])

      }
      else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"])

      }
      else {
        this.getCarsDetails()

        this.getBrands()
        this.getColors()
      }
    })


  }



  getCarsDetails() {
    this.carService.getCarsDetail().subscribe((response) => {
      this.carsDetails = response.data
      this.dataLoaded = true;

    })
  }
  getCarById(carId: Number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.cars = response.data

      this.dataLoaded = true
    })
  }

  getCarsByBrandId(brandId: Number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carsDetails = response.data

      this.dataLoaded = true
    })
  }
  getCarsByColorId(colorId: Number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carsDetails = response.data

      this.dataLoaded = true
    })
  }

  getCarsByBrandAndColor(brandId: number, colorId: Number) {
    this.carService.getCarsByBrandAndColor(brandId, colorId).subscribe((response) => {
      this.carsDetails = response.data

      this.dataLoaded = true
    })

  }

  getCarImageByCarId(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe(response => {
      const imagePath = response.data[2].imagePath
      this.imageOfPath = this.baseUrl + imagePath
    })
    return this.imageOfPath
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
      console.log(this.brands);
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data
    })
  }

  filterCars() {
    let brandId = this.selectedBrand !== 0 ? this.selectedBrand : null;
    let colorId = this.selectedColor !== 0 ? this.selectedColor : null;

    if (brandId !== null && colorId !== null) {
      this.getCarsByBrandAndColor(brandId, colorId);
    } else if (brandId !== null) {
      this.getCarsByBrandId(brandId);
    } else if (colorId !== null) {
      this.getCarsByColorId(colorId);
    } else {
      this.getCarsDetails();
    }
  }
}
