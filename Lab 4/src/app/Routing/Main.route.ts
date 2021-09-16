import {Routes} from '@angular/router'
import { CustomerComponent } from '../Customer/Customer.component'
import { HomeComponent } from '../Home/Home.component'
import { SupplierComponent } from '../Supplier/Supplier.component'

export const mainroutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'customer',loadChildren:()=>import('../Customer/Customer.module').then(m=>m.CustomerModule)},
    {path:'supplier',loadChildren:()=>import('../Supplier/Supplier.module').then(m=>m.SuppplierModule)}
]







