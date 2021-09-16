import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { supplierroute } from '../Routing/Supplier.route';
import { SupplierComponent } from './Supplier.component';


@NgModule({
    declarations:[SupplierComponent],
    imports:[CommonModule,RouterModule.forChild(supplierroute)],
    providers:[],
    exports:[SupplierComponent]
})

export class SuppplierModule{

}