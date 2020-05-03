import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public data = new ReplaySubject<any>(1);

  constructor(private http:HttpClient) { }

  public obtenerClientes(): Observable<any> {
    return this.http.get(`${ENV.API_ENDPOINT}/cliente/`);
  }

  public obtenerCompras(id): Observable<any> {
    return this.http.get(`${ENV.API_ENDPOINT}/cliente//validarcompras/${id}`);
  }

  public gecliente() {
    return this.data.asObservable();
  }

  public setCliente(producto) {
    this.data.next(producto);
  }

}
