import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { MachineVM, MachineSlotVM } from '../../shared.module/models/machine-vm';
import { ProductVM, ProductDetailsVM } from '../../shared.module/models/product-vm';

@Injectable()
export class VendingMachineService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'api';  // URL to web api

    constructor(private _httpClient: HttpClient) { }

    public getVendingMachines(): Observable<MachineVM[]> {
        return this._httpClient.get<MachineVM[]>(`${this.apiUrl}/MACHINES`);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}