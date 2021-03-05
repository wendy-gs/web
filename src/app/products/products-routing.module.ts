import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProductsStoreComponent } from './pages/products-store/products-store.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'ofertas',
        component:OffersComponent
      },
      {
        path:'productos',
        component:ProductsStoreComponent
      },
      {
        path:'**',
        redirectTo:'ofertas'
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
