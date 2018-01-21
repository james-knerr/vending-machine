import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SnackBarService } from '../../../core.module/services/snackbar.service';
import { VendingMachineService } from '../vending-machine.service';
import { MachineVM, MachineSlotVM } from '../../../shared.module/models/machine-vm';
import { ProductVM } from '../../../shared.module/models/product-vm';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss']
})
export class VendingMachineComponent implements OnInit {

  public isBusy = false;
  public model = new MachineVM();
  public machineId = '';
  public moneyToInsert = 0;
  public totalPaid = 0;
  public changeDescription = '';
  public maxAmount = 100;
  public maxAmountError = '';
  public paymentAmountMask = new createNumberMask({
    prefix: '',
    allowDecimal: true
  });

  constructor(
    private _snackBar: SnackBarService,
    private _vendingMachineService: VendingMachineService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.machineId = this._route.snapshot.paramMap.get('machineId');
    this.getVendingMachine();
  }

  public getVendingMachine(forceRefresh?: boolean) {
    this.isBusy = true;
    this._vendingMachineService.getVendingMachines()
      .subscribe(k => {
        this.model = k.find(k => k.id === this.machineId);
        this.isBusy = false;
      }, err => {
        this._snackBar.open('error', err, 'OK');
        this.isBusy = false;
      });
  }

  public productChosen(slot: MachineSlotVM) {
    let chosenSlotIndex = this.model.slots.findIndex(k => k.id === slot.id);
    let chosenSlot = this.model.slots[chosenSlotIndex];
    this.totalPaid -= chosenSlot.assignedProduct.price;
    chosenSlot.assignedProduct.quantity--;
  }

  public moneyClicked(amount: number) {
    this.totalPaid += amount;
  }

  public calculateChange() {
    const dollarsAndCoins = [20, 10, 5, 1, .25, .1, .05, .01];
    let dollarsAndCoinsCount = [0, 0, 0, 0, 0, 0, 0, 0];
    let amountRemaining = Number.parseFloat(this.totalPaid.valueOf().toFixed(2));
    dollarsAndCoins.forEach(k => {
      if (amountRemaining > 0) {
        if (k <= amountRemaining) {
          let remain = Number.parseFloat((amountRemaining % k).toFixed(2));
          dollarsAndCoinsCount[dollarsAndCoins.findIndex(kk => kk === k)] = Number.parseFloat(((amountRemaining - remain).toFixed(2))) / k;
          if (remain > 0) {
            amountRemaining = Number.parseFloat((remain.valueOf()).toFixed(2));
          } else {
            amountRemaining = 0;
          }
        }
      }
    });
    this.changeDescription = 'Your change is '
      + dollarsAndCoinsCount[0] + ' Twenty Dollar Bill(s), '
      + dollarsAndCoinsCount[1] + ' Ten Dollar Bill(s), ' +
      + dollarsAndCoinsCount[2] + ' Five Dollar Bill(s), ' +
      + dollarsAndCoinsCount[3] + ' One Dollar Bill(s), \n' +
      + dollarsAndCoinsCount[4] + ' Quarters, ' +
      + dollarsAndCoinsCount[5] + ' Dimes, ' +
      + dollarsAndCoinsCount[6] + ' Nickels, and ' +
      + dollarsAndCoinsCount[7] + ' Pennies.';
  }


  public amountOnFocus(value: any, id: any) {
    if (id === 'amount') {
      if (this.moneyToInsert === 0) {
        this.moneyToInsert = null;
      }
    }
  }

  public amountOnBlur(value: any, id: any) {
    if (value === null || value === '') {
      if (id === 'amount') {
        this.moneyToInsert = 0;
      }
      (<HTMLInputElement>document.getElementById(id)).value = '0';
    }
  }

  public amountOnChanges() {
    if (this.stripFormatting(this.moneyToInsert) > this.maxAmount) {
      this.maxAmountError = 'Amount cannot be more than $' + this.maxAmount + '!';
    } else {
      this.maxAmountError = '';
    }
  }

  public stripFormatting(amount: any): number {
    if (amount) {
      if (amount.toString().indexOf(',') > -1) {
        return Number(amount.toString().replace(/,/g, ''));
      } else {
        return Number(amount);
      }
    } else {
      return 0;
    }

  }

  public insertMoney() {
    this.totalPaid += this.stripFormatting(this.moneyToInsert);
  }
}