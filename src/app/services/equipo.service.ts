import { Injectable } from '@angular/core';
import { Posicion } from '../models/posicion';
import { Equipo } from '../models/equipo';
import { BehaviorSubject, Observable, of, EMPTY } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { EQUIPOS } from './mocks/equipos/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipo = new BehaviorSubject<Equipo>(null);

  equipoActual = this.equipo.asObservable();

  constructor(
    private api: ApiService
  ) { }

  getDetalle(posicion: Posicion, pais: string) {
    let subscribe$: Observable<any>
    if (environment.mocks) {
      if (EQUIPOS[pais])
        subscribe$ = of(EQUIPOS[pais][posicion.cod]);
      else
        subscribe$ = of(null)
    } else {
      subscribe$ = this.api.get(``);
    }

    subscribe$
      .subscribe(
        (detalleEquipo: Equipo) => this.equipo.next(detalleEquipo),
        (error: any) => this.equipo.next(null)
      )
  }
}
