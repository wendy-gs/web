import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { AProducto } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public btn = {active:'act'};
  @Input() producto! : AProducto;
  total:number=1;

 
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }
 
 
  showAlert(producto: AProducto, total:number){
     this.notificationService.addProduct(producto, total);
    this.btn.active = 'des';
  }
  add(unidad: string,producto: AProducto){
    if(unidad === 'KG.'){
      this.total= this.total+0.250
      this.notificationService.addProduct(producto,this.total);
    }else {
    this.total= this.total+1;
    this.notificationService.addProduct(producto, this.total);
  }
  }
  remove(unidad:string, producto: AProducto, ){
    if(unidad=== 'KG.'){
      if(this.total ===0.250){
        return;
      }
      else {
        this.total= this.total-0.250;
        this.notificationService.addProduct(producto,this.total);
      }
    }else {
      if(this.total===1){
        return;
      }
      this.total= this.total-1;
      this.notificationService.addProduct(producto,this.total);
    }
    

  }
}
