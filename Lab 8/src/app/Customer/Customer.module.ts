import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { customerroute } from '../Routing/Customer.route';
import { GridComponent } from '../Utility/Grid.component';
import { CustomerComponent } from './Customer.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';

@NgModule({
    declarations:[CustomerComponent,GridComponent],
    imports:[CommonModule,FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(customerroute)
    ],
    providers:[
        {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor , 
            multi:true}
    ],
    exports:[CustomerComponent]
})

export class CustomerModule{

}









