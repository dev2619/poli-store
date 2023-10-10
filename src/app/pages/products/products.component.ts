import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit {
  productDialog: boolean = false;

  products!: Product[];

  product!: Product;

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  statuses!: any[];

  constructor(private productService: ProductsService, private primengConfig: PrimeNGConfig, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Estas seguro de eliminar los productos seleccionados?',
      header: 'Eliminar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      acceptButtonStyleClass: 'text-white rounded p-2 bg-green-500',
      rejectButtonStyleClass: 'text-white rounded p-2 bg-red-500',
      accept: () => {
        this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
        this.selectedProducts = [];
        this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Productos eliminados', life: 3000 });
      }
    });
  }

  editProduct() {
    if (this.selectedProducts.length == 1) {
      this.product = { ...this.selectedProducts[0] };
      this.productDialog = true;
    } else {
      if (this.selectedProducts.length > 1) {
        this.messageService.add({
          severity: 'error',
          summary: 'Debes seleccionar unicamente un producto a editar.'
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Debes seleccionar algún producto a editar.'
        });
      }
    }
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Estas seguro de eliminar el producto ' + product.name + '?',
      header: '',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Producto eliminado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Producto actualizado', life: 3000 });
      } else {
        this.product.id = this.createId();
        this.product.imgSource = 'https://images.pexels.com/photos/5945608/pexels-photo-5945608.jpeg';
        this.products.push(this.product);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string = 'DISPONIBLE'): string {
    switch (status) {
      case 'DISPONIBLE':
        return 'success';
      case 'POCAS UNIDADES':
        return 'warning';
      case 'AGOTADO':
        return 'danger';
      default:
        return this.getSeverity();
    }
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.productService.getProducts().subscribe((data) => (this.products = data, this.selectedProducts = data));

    this.statuses = [
      { label: 'DISPONIBLE', value: 'Disponible' },
      { label: 'POCAS UNIDADES', value: 'Pocas Unidades' },
      { label: 'AGOTADO', value: 'Agotado' }
    ];
  }
}
