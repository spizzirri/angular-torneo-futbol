import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DetallesComponent } from './detalles/detalles.component'
import { DetalleEquipoService } from './services/detalle-equipo.service';

@NgModule({
  declarations: [
    AppComponent,
    PosicionesComponent,
    CabeceraComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DetalleEquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
