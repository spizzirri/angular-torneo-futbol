import { TestBed} from '@angular/core/testing';
import { EquipoService } from './equipo.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Posicion } from '../models/posicion';
import { Equipo } from '../models/equipo';
import { ESCUDOS } from './mocks/equipos/escudos';

fdescribe('DetalleEquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: EquipoService = TestBed.get(EquipoService);
    expect(service).toBeTruthy();
  });

  it('Debe cargar el detalle del equipo River Plate', ()=>{

    const service: EquipoService = TestBed.get(EquipoService);
    const posicionSeleccionada:Posicion = { "nombre": "River Plate", "pj": "25", "pg": "13", "pe": "6", "pp": "6", "dg": "", "pts": "45", "cod": "riv" };
    const detalleDelEquipo:Equipo = { "nombre": "River Plate", "estadio": "Monumental", "apodo": "Millonario", "fundacion": "1901", "escudo": ESCUDOS["ARG"]["riv"].base64 };
    service.getDetalle(posicionSeleccionada, "ARG");

    service.equipoActual
      .subscribe((data)=> expect(data).toEqual(detalleDelEquipo));

  });
});
