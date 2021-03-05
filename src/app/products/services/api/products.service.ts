import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../interfaces/products.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http : HttpClient) { }
  getProducts(tienda: string, categoria:string): Observable<Products>{
    let params = new HttpParams().append('idtienda',tienda);
    params = params.append('idcategoria',categoria)
    return this.http.get<Products>('http://185.253.155.200:19800/api/AppWeb/Productos', {params});
  }
}
