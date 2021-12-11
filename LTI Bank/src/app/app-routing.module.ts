import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { HomeComponent } from './home/home.component';

import { UpdateCustomerComponent } from './update-customer/update-customer.component';




const routes: Routes = [ 
{  path: '', redirectTo: 'Customers', pathMatch: 'full' },

  {path:"add", component:AddCustomerComponent}, 
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
{path:"Customers", component:CustomerListComponent},
{path:"update/:id", component:UpdateCustomerComponent},
{path:"delete/:id", component:DeleteCustomerComponent},
{path:"details/:id", component:CustomerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
