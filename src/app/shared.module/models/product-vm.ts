export class ProductVM {
    public id: string;
    public name: string;
    public imageUrl: string;
    public price: number;
    public quantity: number;
    //public details: ProductDetailsVM;
}

export class ProductDetailsVM {
    public id: string;
    public shortDescription: string;
    public longDescription: string;
    public imageUrl: string;
}