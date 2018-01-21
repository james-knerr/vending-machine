import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        loadChildren: './main.module/main.module#MainModule',
        data: {
            menuItem: 'Home',
            title: 'Vending Machine Simulator'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // enableTracing: true, // <-- debugging purposes only
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }

