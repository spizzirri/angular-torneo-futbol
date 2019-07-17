import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesComponent } from './detalles.component';
import { Equipo } from '../models/equipo';
import { ESCUDOS } from '../services/mocks/equipos/escudos';
import { EquipoService } from '../services/equipo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetallesComponent', () => {
  let component: DetallesComponent;
  let fixture: ComponentFixture<DetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesComponent],
      imports: [HttpClientTestingModule],
      providers: [EquipoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Debe retornar el equipo sin modificaciones", () => {

    const equipo: Equipo = { "nombre": "River Plate", "estadio": "Monumental", "apodo": "Millonario", "fundacion": "1901", "escudo": ESCUDOS["ARG"]["riv"].base64 };
    const equipoEsperado: Equipo = { ...equipo }
    const equipoObtenido = component.verificarDatos(equipoEsperado);

    expect(equipoObtenido).toEqual(equipoEsperado);
  });

  it("Dado un equipo sin escudo, debe modificar el objeto con la imagen 'no data'", () => {

    const equipo: Equipo = { "nombre": "River Plate", "estadio": "Monumental", "apodo": "Millonario", "fundacion": "1901", "escudo": null };
    const equipoEsperado: Equipo = { "nombre": "River Plate", "estadio": "Monumental", "apodo": "Millonario", "fundacion": "1901", "escudo": "../../assets/nodata.jpg" };
    const equipoObtenido = component.verificarDatos(equipo);

    expect(equipoObtenido).toEqual(equipoEsperado);
  });
});
