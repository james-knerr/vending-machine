import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module/shared.module';
import { VendingMachineRoutingModule } from './vending-machine-routing.module';

import { VendingMachineService } from './vending-machine.service';

import { VendingMachinePageComponent } from './vending-machine-page.component/vending-machine-page.component';
import { VendingMachineListComponent } from './vending-machine-list.component/vending-machine-list.component';
import { VendingMachineComponent } from './vending-machine.component/vending-machine.component';

@NgModule({
  imports: [
    VendingMachineRoutingModule,
    SharedModule
  ],
  declarations: [
    VendingMachineComponent,
    VendingMachinePageComponent,
    VendingMachineListComponent
  ],
  providers: [VendingMachineService]
})

export class VendingMachineModule { }
