import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tienda = {store1:'cat1',store2:'cat2', store3:'cat2',store4:'cat2'}
  constructor() { }

  ngOnInit(): void {
  }
  selectStore(store :number) { 
    switch(store){
      case 1: 
        this.tienda.store1= 'cat1';
        this.tienda.store2 = 'cat2';
        this.tienda.store3 = 'cat2';
        this.tienda.store4 = 'cat2';
        break;
      case 2:
        this.tienda.store1= 'cat2';
        this.tienda.store2 = 'cat1';
        this.tienda.store3 = 'cat2';
        this.tienda.store4 = 'cat2';
        break;
      case 3: 
        this.tienda.store1= 'cat2';
        this.tienda.store2 = 'cat2';
        this.tienda.store3 = 'cat1';
        this.tienda.store4 = 'cat3';
        break;
      case 4:
        this.tienda.store1= 'cat2';
        this.tienda.store2 = 'cat2';
        this.tienda.store3 = 'cat2';
        this.tienda.store4 = 'cat1';
        break;

    }
   
  }
  

}
