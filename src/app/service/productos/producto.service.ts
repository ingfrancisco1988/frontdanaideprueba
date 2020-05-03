import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public data = new ReplaySubject<any>(1);
  public devueltos = new ReplaySubject<any>(1);
  constructor(private http: HttpClient) { }



  public getProductos() {
    return this.data.asObservable();
  }

  public setProducto(producto) {
    this.data.next(producto);
  }

  public getProductosDevueltos() {
    return this.devueltos.asObservable();
  }

  public setProductosDevuelto(producto) {
    this.data.next(producto);
  }

}
