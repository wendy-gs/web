import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Categoria } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
 showCarousel :string='true';

 categorias: Categoria[] = [
  {
    nombre:'Verdura',
    id:'1'
  }, 
  {
    nombre:'Frutas',
    id:'2'
  },
  { 
    nombre: 'Hongos', 
    id: '3'
  },
  {
    nombre: 'Otros',
    id: '4'
  },
  {
    nombre: 'Miel',
    id: '5'
  },{
    nombre:  'Queso o Lácteos', 
    id: '6'
  },
  {
    nombre: 'Aceites', 
    id: '7'
  },
  {
    nombre: 'Harinas',
    id: '8' 
  },
  {
    nombre:'Granos',
    id: '9'
  }  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
