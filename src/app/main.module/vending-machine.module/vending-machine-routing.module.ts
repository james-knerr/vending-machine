import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendingMachinePageComponent } from './vending-machine-page.component/vending-machine-page.component';
import { VendingMachineListComponent } from './vending-machine-list.component/vending-machine-list.component';
import { VendingMachineComponent } from './vending-machine.component/vending-machine.component';

const vendingMachineRoutes: Routes = [
    {
        path: '',
        redirectTo: 'vending-machines-list',
        pathMatch: 'full'
    },
    {
        path: '',
        component: VendingMachinePageComponent,
        data: {
            menuItem: 'Vending Machines',
            title: 'Vending Machines'
        },
        children: [
            {
                path: 'vending-machines-list',
                component: VendingMachineListComponent,
                data: {
                    menuItem: 'Vending Machines',
                    title: 'Vending Machines'
                },
            },
            {
                path: 'vending-machines-list/:machineId',
                component: VendingMachineComponent,
                data: {
                    menuItem: 'Vending Machines',
                    title: 'Vending Machine'
                },
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(vendingMachineRoutes)],
    exports: [RouterModule]
})
export class VendingMachineRoutingModule { }
