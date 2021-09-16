import {Routes} from '@angular/router'
import { CustomerComponent } from '../Customer/Customer.component'
import { HomeComponent } from '../Home/Home.component'
import { SupplierComponent } from '../Supplier/Supplier.component'

export const mainroutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'customer',component:CustomerComponent},
    {path:'supplier',component:SupplierComponent}
]







