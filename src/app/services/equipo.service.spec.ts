import { TestBed, inject, async } from '@angular/core/testing';

import { EquipoService } from './equipo.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Posicion } from '../models/posicion';

describe('DetalleEquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: EquipoService = TestBed.get(EquipoService);
    expect(service).toBeTruthy();
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should expect a GET ../../assets/equipos/arg/riv.json', ()=>{


    async(
      inject([HttpClient, HttpTestingController], (http:HttpClient, backend:HttpTestingController)=>{

        http.get('../../assets/equipos/arg/riv.json').subscribe();

        backend.expectOne({
          url: '../../assets/equipos/arg/riv.json',
          method: 'GET',
          
        });
      }));           
  });


  it('should expect a GET ../../assets/equipos/arg/riv.json', ()=>{
    async(
      inject([HttpClient, HttpTestingController], (http:HttpClient, backend:HttpTestingController)=>{

        const riverPosition:Posicion =  { "nombre": "River Plate", "pj": "25", "pg": "13", "pe": "6", "pp": "6", "dg": "", "pts": "45", "cod": "riv" }
        http.get('../../assets/equipos/arg/riv.json')
          .subscribe((next)=>{
            expect(next).toEqual(riverPosition)
          });

        backend.expectOne({
          url: '../../assets/equipos/arg/riv.json',
          method: 'GET',
        })[0].flush(riverPosition);
      }));                
  });

});
