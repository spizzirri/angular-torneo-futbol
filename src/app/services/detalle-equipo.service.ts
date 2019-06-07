import { Injectable } from '@angular/core';
import { Posicion } from '../models/posicion';
import { Equipo } from '../models/equipo';
import { BehaviorSubject, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleEquipoService {

  private equipo = new BehaviorSubject<Equipo>(null);

  equipoActual = this.equipo.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  cambiarEquipo(posicion:Posicion, pais:String){
    this.http.get(`../../assets/equipos/${pais}/${posicion.cod}.json`)
      .subscribe(
        (detalleEquipo:Equipo) => this.equipo.next(detalleEquipo),
        error => this.equipo.next(null)
      );
  }
}
