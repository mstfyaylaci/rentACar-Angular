import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{

  brands:Brand[]=[];
  dataLoad=false;
  currentBrand:Brand
  

  /**
   *
   */
  constructor(private brandService:BrandService) {
    
    
  }
  ngOnInit(): void {
   this.getBrands();
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe((response) => {
      this.brands=response.data
      this.dataLoad=true
    });
  }

  setCurrentBrands(brand:Brand){
    
    this.currentBrand=brand
    
  }

  getCurrentBrand(brand:Brand){
    
    if (brand==this.currentBrand) {
      return"list-group-item active"
    }
    else{
      return"list-group-item"
    }
  }

  getAllBrand(){
    if (!this.currentBrand) {
      return"list-group-item active"
    }
    else{
      return"list-group-item"
    }
  }
  

}
