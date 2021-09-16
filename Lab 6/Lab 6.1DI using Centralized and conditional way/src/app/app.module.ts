import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CL, DB } from './Customer/Customer.component';
import { HomeComponent } from './Home/Home.component';
import { MasterComponent } from './Home/Master.component';
import { mainroutes } from './Routing/Main.route';
import { BaseLogger, ConsoleLogger, DBLogger } from './Utility/CustomerApp.Logger';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(mainroutes)
  ],
  providers: [
    // centralized way DI
    {
        provide:BaseLogger,
        useClass:DBLogger
    },
    // conditional way DI
    {provide:DB,useClass:DBLogger},   
    {provide:CL,useClass:ConsoleLogger},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
