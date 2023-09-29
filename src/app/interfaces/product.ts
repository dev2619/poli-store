export interface Product {
    id: number;
    name: string;
    description: string;
    productOnSale: boolean;
    buyPrice: number;
    sellingPrice: number;
    units: number;
    imgSource: string;
    entryDate: Date;
    expirationDate: Date;
    updateOn?: Date;
    insertOn?: Date;
}

