import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/Customer';
import {CustomerService}  from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
 
  customer :Customer = new Customer();
  
  //address : Address = new Address(0, '', '', '', '');
  //customer: Customer = new Customer(0,'',0,this.address,'');
  submitted = false;
  constructor(private CustomerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }
  

  saveCustomer(){
   // this.customer = new Customer();
   this.CustomerService.AddCustomer(this.customer).subscribe(data=>{
      console.log(data);
      
     // this.goToCustomerList();
    },
    error=>console.log(error)
   ); }
goToCustomerList()
{
  this.router.navigate(['/Customers']);
}
 

  onSubmit() {
    this.submitted = true;
    console.log("data");
   // this.save(); 
   this.saveCustomer();   
  }

  AddNew(){
    this.submitted = false;
   this.router.navigate(['/add']);
  }
}
