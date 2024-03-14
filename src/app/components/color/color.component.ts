import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit{
  
  colors:Color[]=[]
  
  dataLoad=false;
  currentColor:Color
  
  constructor(private colorService:ColorService) {
    
  }
  
  ngOnInit(): void {
    this.getColors();
  }
  
  getColors(){
    this.colorService.getColors().subscribe( (response) => {
      this.colors=response.data
      
      this.dataLoad=true;
    });
  }

  setCurrentColors(color:Color){
    
    this.currentColor=color
    
  }

  getCurrentColor(color:Color){
    
    if (color==this.currentColor) {
      return"list-group-item active"
    }
    else{
      return"list-group-item"
    }
  }

  getAllColor(){
    if (!this.currentColor) {
      return"list-group-item active"
    }
    else{
      return"list-group-item"
    }
  }


}
