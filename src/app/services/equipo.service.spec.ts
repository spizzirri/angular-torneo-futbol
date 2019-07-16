import { TestBed} from '@angular/core/testing';
import { EquipoService } from './equipo.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('DetalleEquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: EquipoService = TestBed.get(EquipoService);
    expect(service).toBeTruthy();
  });

  it('Debe cargar el detalle de un equipo seleccionado', ()=>{

    const service: EquipoService = TestBed.get(EquipoService);
  });
});
