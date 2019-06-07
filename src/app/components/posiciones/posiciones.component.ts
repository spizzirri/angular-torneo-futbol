import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posicion } from '../../models/posicion'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Paises } from '../../enums/paises.enum'
import { DetalleEquipoService } from 'src/app/services/detalle-equipo.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {

  title:String = "Posiciones";
  equipos:Posicion[]
  paisSeleccionado:String = Paises.ARGENTINA
  pais

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private detalleEquipo:DetalleEquipoService 
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {

      this.pais = params.get('pais')? params.get('pais'):'ARG';
      
      this.cargarPosiciones(this.pais).subscribe(
        posiciones => {
          this.equipos = posiciones
        }
      )
    })
  }

  verDetalleEquipo(equipo:Posicion, pais:String){
    console.log('app-posiciones: ', equipo);
    console.log('pais: ', pais);
    this.detalleEquipo.cambiarEquipo(equipo, pais);
  }

  cargarPosiciones(pais:String):Observable<any>{
    if(pais == Paises.ARGENTINA)
      return this.http.get("../../assets/tablas/argentina-superliga-2018-2019.json")
    if(pais == Paises.BRASIL)
      return this.http.get("../../assets/tablas/brasil-brasileirao-2018.json")
    if(pais == Paises.COLOMBIA)
      return this.http.get("../../assets/tablas/colombia-apertura-2019.json")  
  }
}
