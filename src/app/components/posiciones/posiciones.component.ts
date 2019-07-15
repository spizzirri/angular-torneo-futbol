import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posicion } from '../../models/posicion'
import { EquipoService } from 'src/app/services/equipo.service';
import { PosicionesService } from 'src/app/services/posiciones.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit{

  title:String = "Posiciones";
  equipos:Posicion[];

  constructor(
    private route:ActivatedRoute,
    private equipoService:EquipoService,
    private posicionesService: PosicionesService
    ) { }

  ngOnInit() {

    const params$ = this.route.paramMap;
    params$
      .subscribe( 
        (params)=> {
          const pais = params.get('pais')? params.get('pais'):'ARG'
       
          const posiciones$ = this.posicionesService.getPosiciones(pais);
          posiciones$
            .subscribe( posiciones => { this.equipos = posiciones });
        }
      )
  }

  detalleEquipo(equipo:Posicion, pais:String){
    this.equipoService.getDetalle(equipo, pais);
  }
}
