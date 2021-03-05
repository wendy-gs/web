import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products.service';
import { Products, AProducto, Categoria } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.scss']
})
export class ProductsStoreComponent implements OnInit {
  @Input() categoria:Categoria={ nombre:'0', id: '0'};
  products!: AProducto[];

  constructor(private productsService: ProductsService) { 
    
  }

  ngOnInit(): void {
    this.productsService.getProducts('1',this.categoria.id)
    .subscribe( resp => this.products= resp.AProductos);
  }

}
