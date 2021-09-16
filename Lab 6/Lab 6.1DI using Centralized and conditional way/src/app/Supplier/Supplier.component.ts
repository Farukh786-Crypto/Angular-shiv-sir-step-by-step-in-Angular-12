import { Component } from '@angular/core'
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
    selector:'supplier-comp',
    templateUrl:'./Supplier.component.html'
})

export class SupplierComponent{
    title:string='Supplier Component is Worked !!'

    loggerObj:BaseLogger;

    constructor(public _logger:BaseLogger){
        this.loggerObj=_logger;
        this.loggerObj.Log();
    }
}