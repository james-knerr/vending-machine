import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { MainPageComponent } from './main-page.component/main-page.component';
import { MainDashboardComponent } from './main-dashboard.component/main-dashboard.component';

import { MainRoutingModule } from './main-routing.module';
@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [MainPageComponent, MainDashboardComponent]
})
export class MainModule { }
