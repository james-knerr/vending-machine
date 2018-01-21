import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component/main-page.component';
import { MainDashboardComponent } from './main-dashboard.component/main-dashboard.component';
const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: 'dashboard',
                component: MainDashboardComponent,
                data: {
                    menuItem: 'Dashboard',
                    title: 'Dashboard'
                }
            },
            {
                path: 'vending-machines',
                loadChildren: './vending-machine.module/vending-machine.module#VendingMachineModule',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    providers: []
})

export class MainRoutingModule { }
