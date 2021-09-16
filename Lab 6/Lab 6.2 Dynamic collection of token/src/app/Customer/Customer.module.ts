import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { customerroute } from '../Routing/Customer.route';
import { CustomerComponent } from './Customer.component';

@NgModule({
    declarations:[CustomerComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(customerroute)],
    providers:[],
    exports:[CustomerComponent]
})

export class CustomerModule{

}









