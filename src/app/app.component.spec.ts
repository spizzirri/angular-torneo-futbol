import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PosicionesComponent } from '../app/components/posiciones/posiciones.component'
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DetallesComponent } from './detalles/detalles.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        CabeceraComponent,
        DetallesComponent,
        PosicionesComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("Debe existir la etiqueta app-cabecera", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const cabeceraTag = fixture.debugElement.query(By.css("app-cabecera"));

    expect(cabeceraTag).toBeTruthy();
  });

  it("Debe existir la etiqueta router-outlet", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const routerOutletTag = fixture.debugElement.query(By.css("router-outlet"));

    expect(routerOutletTag).toBeTruthy();
  });

  it("Debe existir la etiqueta app-detalles", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const detallesTag = fixture.debugElement.query(By.css("app-detalles"));

    expect(detallesTag).toBeTruthy();
  });
});
