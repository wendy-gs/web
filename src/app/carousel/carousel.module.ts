import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselSlideElement } from './carousel.component';

import { CarouselDirective } from './carousel.directive';



@NgModule({
  declarations: [CarouselComponent, CarouselSlideElement,CarouselDirective],
  exports:[
    CarouselComponent, 
    CarouselDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CarouselModule { }
