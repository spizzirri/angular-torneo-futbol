import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posicion } from '../../models/posicion'
import { EquipoService } from 'src/app/services/equipo.service';
import { PosicionesService } from 'src/app/services/posiciones.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {

  title: String = "Posiciones";
  equipos: Posicion[];
  pais: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private equipoService: EquipoService,
    private posicionesService: PosicionesService
  ) { }

  ngOnInit() {

    const params$ = this.activatedRoute.paramMap;

    params$
      .subscribe(params => {
        this.pais = params.get("pais") ? params.get("pais") : "ARG";
        const equipos$ = this.posicionesService.getPosiciones(this.pais).toPromise()

        equipos$
          .then(equipos => this.equipos = equipos)
          .catch(err => new Error(err))
      });
  }

  detalleEquipo(equipo: Posicion, pais: string) {
    this.equipoService.getDetalle(equipo, pais);
  }
}
