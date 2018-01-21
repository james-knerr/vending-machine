import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../../core.module/services/snackbar.service';
import { VendingMachineService } from '../vending-machine.service';
import { MachineVM } from '../../../shared.module/models/machine-vm';

@Component({
  selector: 'app-vending-machine-list',
  templateUrl: './vending-machine-list.component.html',
  styleUrls: ['./vending-machine-list.component.scss']
})
export class VendingMachineListComponent implements OnInit {

  public isBusy = false;
  public vendingMachines = new Array<MachineVM>();

  constructor(
    private _snackBar: SnackBarService,
    private _vendingMachineService: VendingMachineService) {
  }

  ngOnInit() {
    this.getVendingMachines();
  }

  public getVendingMachines(forceRefresh?: boolean) {
    this.isBusy = true;
    this._vendingMachineService.getVendingMachines()
      .subscribe(k => {
        this.vendingMachines = k;
        this.isBusy = false;
      },
      err => {
        this.isBusy = false;
        this._snackBar.open('error', err, 'OK');
      });
  }
}