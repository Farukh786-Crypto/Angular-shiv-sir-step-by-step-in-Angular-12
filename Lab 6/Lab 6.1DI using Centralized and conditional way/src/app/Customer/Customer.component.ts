import { Component, InjectionToken, Injector } from '@angular/core'
import { BaseLogger, DBLogger } from '../Utility/CustomerApp.Logger';
import { Customer } from './Customer.model';
export const DB=new InjectionToken("1");
export const CL=new InjectionToken("2");

@Component({
    selector:'cust-app',
    templateUrl:'./Customer.component.html'
})

export class CustomerComponent{
    title:string='Customer Application worked !!';

    customerModel:Customer=new Customer();
    customerModels:Array<Customer>=new Array<Customer>();

    loggerObj:BaseLogger;

    constructor(public _injector:Injector){
        this.loggerObj=_injector.get<BaseLogger>(CL);
        this.loggerObj.Log();
    }

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











