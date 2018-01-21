import { ProductVM } from './product-vm';

export class MachineVM {
    public id: string;
    public name: string;
    public slots: MachineSlotVM[];
}

export class MachineSlotVM {
    public id: string;
    public code: string;
    public assignedProduct: ProductVM;
}