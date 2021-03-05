import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProductsStoreComponent } from './pages/products-store/products-store.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NotificationComponent } from './components/notification/notification.component';
import { CarouselModule } from '../carousel/carousel.module';
import { BtnControlComponent } from './components/btn-control/btn-control.component';
import { SideButtonsComponent } from './components/side-buttons/side-buttons.component';
import { LocationComponent } from './components/location/location.component';



@NgModule({
  declarations: [
    HomeComponent,
    OffersComponent, 
    ProductsStoreComponent, 
    SideNavComponent, 
    ProductCardComponent, 
    ProductFilterComponent, 
    HeaderComponent, 
    NotificationComponent, BtnControlComponent, SideButtonsComponent, LocationComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProductsRoutingModule,
    MaterialModule,
    CarouselModule
  ]
})
export class ProductsModule { }
