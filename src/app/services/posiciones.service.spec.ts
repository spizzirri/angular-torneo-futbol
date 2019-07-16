import { TestBed } from '@angular/core/testing';

import { PosicionesService } from './posiciones.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('PosicionesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    })
  });

  it('should be created', () => {
    const service: PosicionesService = TestBed.get(PosicionesService);
    expect(service).toBeTruthy();
  });

  it('Deberia devolver la tabla de posiciones de un pais dado', ()=>{
    const service: PosicionesService = TestBed.get(PosicionesService);
    const posiciones$ = service.getPosiciones("ARG");
     
    posiciones$.subscribe(
      (data:Array<any>) => {
        expect(data.length).toBeGreaterThanOrEqual(1); 
      }
    )
  });
});
