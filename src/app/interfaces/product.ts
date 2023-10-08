export interface Product {
    id?: string;
    name?: string;
    description?: string;
    productOnSale?: boolean;
    buyPrice?: number;
    sellingPrice?: number;
    units?: number;
    imgSource?: string;
    entryDate?: Date;
    expirationDate?: Date;
    updateOn?: Date;
    insertOn?: Date;
    category?: string;
    inventoryStatus?: string;
}
