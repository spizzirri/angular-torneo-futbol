import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posicion } from '../../models/posicion'
import { EquipoService } from 'src/app/services/equipo.service';
import { of } from 'rxjs';

class PosicionesService{
  getPosiciones(pais:string){
    return of([
      { "nombre": "Racing Club", "pj": "25", "pg": "17", "pe": "6", "pp": "2", "dg": "", "pts": "57", "cod": "rac" },
      { "nombre": "Defensa y Justicia", "pj": "25", "pg": "15", "pe": "8", "pp": "2", "dg": "", "pts": "53", "cod": "dyj" },
      { "nombre": "Boca Juniors", "pj": "25", "pg": "15", "pe": "6", "pp": "4", "dg": "", "pts": "51", "cod": "boc" },
      { "nombre": "River Plate", "pj": "25", "pg": "13", "pe": "6", "pp": "6", "dg": "", "pts": "45", "cod": "riv" },
    ]);
  }
}

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {

  title: String = "Posiciones";
  equipos: Posicion[];
  pais: string;
  private posicionesService: PosicionesService
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private equipoService: EquipoService
  ) { }

  ngOnInit() {

    this.posicionesService = new PosicionesService();
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
