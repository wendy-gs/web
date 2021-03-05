import { Component, OnInit, NgModule } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  mensaje:number = 0;
  estado: string = "";
  total: number = 0;
  constructor(private notificationService: NotificationService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(LocationComponent);
  }

  ngOnInit(): void {
    this.notificationService.currentProduct.subscribe(mensaje => {
     // this.tipo=mensaje
     // this.hidenAlert();
     this.mensaje= mensaje.length;
     if(this.mensaje === 0){
       this.estado = '';
     }else {
       this.total=0;
      this.estado= 'Activo';
      mensaje.forEach( producto => {
       this.total= this.total + (producto.cantidad!*producto.costopublico)
      })
     }
    });
  }
  hidenAlert(){
    setTimeout(() => {
      this.estado=""
    },2000)
  }


}
