import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-btn-control',
  templateUrl: './btn-control.component.html',
  styleUrls: ['./btn-control.component.scss']
})
export class BtnControlComponent implements OnInit {
  total:number=1;
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }
  showAlert(){
  //  this.notificationService.addProduct("Activo");
  }
  add(){
    this.total= this.total+1;

  }
  remove(){
    if(this.total===1){
      return;
    }
    this.total= this.total-1;

  }
}
