import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DetallesComponent } from './detalles/detalles.component'
import { EquipoService } from './services/equipo.service';
import { PosicionesService } from './services/posiciones.service';

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
    EquipoService,
    PosicionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
