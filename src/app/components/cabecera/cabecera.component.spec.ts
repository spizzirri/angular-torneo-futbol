import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CabeceraComponent } from './cabecera.component';
import { By } from '@angular/platform-browser';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CabeceraComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Deben existir tres etiquetas li", () => {

    const tagsLi = fixture.debugElement.query(By.css("ul")).children;

    expect(tagsLi.length).toBe(3);

  });

  it("Deben existir tres etiquetas li, con Argentina, Brasil y Colombia cada una", () => {

    const tagsLi = fixture.debugElement.query(By.css("ul")).children;

    expect("Argentina").toContain(tagsLi[0].nativeElement.innerText);
    expect("Brasil").toContain(tagsLi[1].nativeElement.innerText);
    expect("Colombia").toContain(tagsLi[2].nativeElement.innerText);

  });
});
