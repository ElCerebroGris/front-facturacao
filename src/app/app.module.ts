import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaListComponent } from './components/factura/factura-list/factura-list.component';
import { GeralComponent } from './components/geral/geral.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaListComponent,
    GeralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
