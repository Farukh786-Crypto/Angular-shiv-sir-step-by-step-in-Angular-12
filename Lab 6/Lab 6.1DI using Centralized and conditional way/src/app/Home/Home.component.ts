import { Component } from '@angular/core'
import { BaseLogger } from '../Utility/CustomerApp.Logger'

@Component({
    selector:'Home-comp',
    templateUrl:'./Home.component.html'
})

export class HomeComponent{
    title:string='Home Component is Worked !!'

    loggerObj:BaseLogger;

    constructor(public _logger:BaseLogger){
        // if anybody ask BaseLogger create object which present in providers[] module inject in constrctor
        this.loggerObj=_logger;
        this.loggerObj.Log();
    }
    

}









