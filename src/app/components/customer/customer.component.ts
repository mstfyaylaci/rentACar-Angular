import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{

  customers:Customer[]=[]
  dataLoad=false

  /**
   *
   */
  constructor(private customerservice:CustomerService) {
    
    
  }
  
  ngOnInit(): void {
    this.getCustomers();
  }


  getCustomers(){
    this.customerservice.getCustomers().subscribe( (response) => {
      this.customers=response.data;
      this.dataLoad=true
      
    }) 
  }

}
