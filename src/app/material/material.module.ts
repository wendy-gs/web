import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule
    
  ]
})
export class MaterialModule { }
