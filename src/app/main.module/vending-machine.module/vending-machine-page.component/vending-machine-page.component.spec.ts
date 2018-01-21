import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingMachinePageComponent } from './vending-machine-page.component';

describe('VendingMachinePageComponent', () => {
  let component: VendingMachinePageComponent;
  let fixture: ComponentFixture<VendingMachinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendingMachinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendingMachinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
