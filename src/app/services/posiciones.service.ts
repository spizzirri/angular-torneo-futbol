import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { TABLAS } from './mocks/tablas/tablas';

@Injectable({
  providedIn: 'root'
})
export class PosicionesService {

  constructor(private apiService: ApiService) { }

  getPosiciones(pais: string) {
    let subscribe$: Observable<any>
    if (environment.mocks) {
      subscribe$ = of(TABLAS[pais]);
    } else {
      subscribe$ = this.apiService.get(``);
    }

    return subscribe$;
  }
}
