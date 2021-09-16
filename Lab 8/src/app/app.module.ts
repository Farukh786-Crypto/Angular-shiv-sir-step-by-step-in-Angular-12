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

var providerscoll:any = [];
// http call get this from the server
providerscoll.push({ provide: DB, useClass: DBLogger });
providerscoll.push({ provide: CL, useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });

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
  // providers contain claases which inject accross the projects
  providers: [providerscoll],
  bootstrap: [AppComponent]
})
export class AppModule { }
