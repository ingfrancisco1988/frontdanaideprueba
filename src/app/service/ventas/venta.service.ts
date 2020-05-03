import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor( private http:HttpClient) { }

  public obtenerProductos(): Observable<any> {
    return this.http.get(`${ENV.API_ENDPOINT}/producto/ver`);
  }
}
