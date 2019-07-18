import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  equipo: Equipo
  constructor(
    private equipoService: EquipoService
  ) { }

  ngOnInit() {
    this.equipoService.equipoActual
      .subscribe(equipo => this.equipo = this.verificarDatos(equipo));
  }

  verificarDatos(equipo: Equipo): Equipo {
    if (!equipo) {
    
    }
    return equipo;
  }
}
