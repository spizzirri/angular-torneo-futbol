import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PosicionesComponent } from './posiciones.component';
import { Posicion } from 'src/app/models/posicion';
import { HttpClientModule } from '@angular/common/http';

describe('PosicionesComponent', () => {
  let component: PosicionesComponent;
  let fixture: ComponentFixture<PosicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Posiciones as title', ()=>{
    expect(component.title).toEqual("Posiciones")
  })

  it('should have title in h3', ()=>{
    let h3Tag:HTMLElement = fixture.nativeElement.querySelector("h1");
    expect(h3Tag.textContent).toEqual(" Posiciones ")
  })
});
