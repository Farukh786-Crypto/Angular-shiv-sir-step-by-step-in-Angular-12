import { Component, InjectionToken, Injector } from '@angular/core'
import { BaseLogger, DBLogger } from '../Utility/CustomerApp.Logger';
import { Customer } from './Customer.model';
export const DB=new InjectionToken("1");
export const CL=new InjectionToken("2");
import {HttpClient} from '@angular/common/http'


@Component({
    selector:'cust-app',
    templateUrl:'./Customer.component.html'
})

export class CustomerComponent{
    title:string='Customer Application worked !!';

    customerModel:Customer=new Customer();
    customerModels:Array<Customer>=new Array<Customer>();

    loggerObj:BaseLogger;
    Disable:boolean = false; 
    constructor(public _injector:Injector,public http:HttpClient){
        this.loggerObj=_injector.get<BaseLogger>(DB);
        this.loggerObj.Log();
    }

    public Add(){
        this.customerModels.push(this.customerModel);
        this.customerModel=new Customer(); // Clear UI
    }

    postToServer(){
        // light weight DTO (Data Transfer Object)
        this.Disable=true;
        var custdto:any={};
        custdto.CustomerCode=this.customerModel.CustomerCode;
        custdto.CustomerName=this.customerModel.CustomerName;
        custdto.CustomerAmount=this.customerModel.CustomerAmount;
        let url="http://localhost:3000/Customers"
        this.http.post(url,custdto).
        subscribe(res=>this.Sucess(res),
        res=>this.Error(res));

    }
    getFromServer(){
       
        let url="http://localhost:3000/Customers"
        this.http.get(url).
        subscribe(res1=>this.SucessGet(res1),res1=>this.ErrorGet(res1));

    }
    Sucess(res:any)
    {
        this.getFromServer();
    }
    Error(res:any)
    {
        console.debug(res);
    }
    SucessGet(res1:any)
    {
        this.customerModels = res1;
        this.Disable = false;
        this.customerModel = new Customer(); // clear UI
    }
    ErrorGet(res1:any)
    {
        console.debug(res1);
    }
    SelectCustomer(_selected:Customer){
        this.customerModel = _selected;
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











