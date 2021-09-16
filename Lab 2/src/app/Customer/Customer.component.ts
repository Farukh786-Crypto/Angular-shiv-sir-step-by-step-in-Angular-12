import { Component } from '@angular/core'
import { Customer } from './Customer.model';

@Component({
    selector:'cust-app',
    templateUrl:'./Customer.component.html'
})

export class CustomerApp{
    title:string='Customer Application worked !!';

    customerModel:Customer=new Customer();

    customerModels:Array<Customer>=new Array<Customer>();

    public Add(){
        this.customerModels.push(this.customerModel);
        this.customerModel=new Customer(); // Clear UI
    }

}











