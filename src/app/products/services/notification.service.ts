import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AProducto } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  arrayProduct : AProducto[] = [];
  private productSource =new BehaviorSubject<AProducto[]>([]);
  currentProduct = this.productSource.asObservable();
  constructor() { }
  addProduct(product: AProducto, cant: number) {

   const indice= this.arrayProduct.findIndex(obj => obj.idproducto === product.idproducto);
   if(indice === -1){
    this.arrayProduct.push({...product, cantidad:cant})
    this.productSource.next(this.arrayProduct);
   }else {
     this.arrayProduct[indice].cantidad=cant;
    this.productSource.next(this.arrayProduct);
   }
  }
}
