import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../models/equipo';
import { DetalleEquipoService } from 'src/app/services/detalle-equipo.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  equipo:Equipo
  constructor(
    private detalleEquipo:DetalleEquipoService 
  ) { }

  ngOnInit() {
    this.detalleEquipo.equipoActual
      .subscribe(equipo => { 
        this.equipo = equipo; 
        console.log('app-detalles: ', this.equipo);
      });
  }
}
