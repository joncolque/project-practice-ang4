import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';

import { appRoutingProviders } from './app.routing'
import { routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
