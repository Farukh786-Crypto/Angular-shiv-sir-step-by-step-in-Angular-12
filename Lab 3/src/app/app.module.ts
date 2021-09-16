import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Customer/Customer.component';
import { HomeComponent } from './Home/Home.component';
import { MasterComponent } from './Home/Master.component';
import { mainroutes } from './Routing/Main.route';
import { SupplierComponent } from './Supplier/Supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    MasterComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(mainroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
