import { Component } from '@angular/core'
import { Customer } from './Customer.model';

@Component({
    selector:'cust-app',
    templateUrl:'./Customer.component.html'
})

export class CustomerComponent{
    title:string='Customer Application worked !!';

    customerModel:Customer=new Customer();

    customerModels:Array<Customer>=new Array<Customer>();

    public Add(){
        this.customerModels.push(this.customerModel);
        this.customerModel=new Customer(); // Clear UI
    }
    haserrorFunc(controlname: string, typeofvalidator: string,): boolean {
        return this.customerModel.formGroup
            .controls[controlname]
            .hasError(typeofvalidator)
    }
    checkDirty(controlname: string): boolean {
        return this.customerModel.formGroup.controls[controlname].dirty
    }

}











