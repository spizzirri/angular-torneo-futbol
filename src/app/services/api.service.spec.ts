import { TestBed, getTestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

describe('ApiService', () => {

  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  beforeEach(() => {
    injector = getTestBed();
    service = TestBed.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterAll(() => {
    injector = null;
    service = null;
    httpMock = null;
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('POST', () => {

    it('Ejecutar POST', () => {
      const result = 'respuesta';

      service.post('/test', {}).subscribe(response => {
        expect(response).toBe(result);
      });

      //Expect that a single request has been made which matches the given URL, and return its mock.
      const req = httpMock.expectOne(environment.apiEndpoint + '/test');
      expect(req.request.method).toBe('POST');

      //Resolve the request by returning a body plus additional HTTP information 
      req.flush(result);
    });

  });

  describe('GET', () => {
    it('Ejecutar GET', () => {
      const result = 'resultado';

      service.get('/test').subscribe(response => {
        expect(response).toBe(result);
      });

      const req = httpMock.expectOne(environment.apiEndpoint + '/test');
      expect(req.request.method).toBe('GET');
      req.flush(result);
    });

    it('Ejecutar GET con cabecera', () => {
      const result = 'resultado';
      const headers = new HttpHeaders().set('headers', 'header');

      service.get('/test', headers).subscribe(response => {
        expect(response).toBe(result);
      });

      const req = httpMock.expectOne(environment.apiEndpoint + '/test');
      expect(req.request.headers.get('headers')).toBe('header');
      expect(req.request.method).toBe('GET');
      req.flush(result);
    })
  });
});
