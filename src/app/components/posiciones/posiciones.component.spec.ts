import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PosicionesComponent } from './posiciones.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { of, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

class EquipoServiceStub {
  getDetalle(equipo: Equipo, pais: string): void { };
}

class PosicionesServiceStub {
  getPosiciones(pais: string): Observable<any> {
    return of([]);
  }
}

class mParamMap implements ParamMap {
  get(name: string): string {
    return "ARG";
  }
  has(name: string): boolean {
    return true;
  }
  getAll(name: string): string[] {
    return [""]
  }
  readonly keys: string[];
}

class ActivatedRouteStub {
  paramMap: Observable<ParamMap> = of(new mParamMap());
}

describe('PosicionesComponent', () => {
  let component: PosicionesComponent;
  let fixture: ComponentFixture<PosicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PosicionesComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: EquipoService, useClass: EquipoServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title in h3', () => {
    let h1: DebugElement = fixture.debugElement.query(By.css("h1"));
    expect(h1.nativeElement.innerText).toContain("Posiciones")
  });
});
