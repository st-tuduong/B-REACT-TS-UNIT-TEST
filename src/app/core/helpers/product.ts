export interface Cart {
  getListProduct(): void;
  addProduct(data?: any): void;
  getProduct(data?: any): void;
  removeProduct(data?: any): void;
  updateProduct(data?: any): void;
  getTotalPrice(data?: any): void;
}

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
};

export class CartService implements Cart {
  listProduct: Product[] = [];
  constructor(data: Product[]) {
    this.listProduct = [...data];
  }

  getListProduct() {
    return this.listProduct;
  }

  addProduct(product: Product) {
    this.listProduct.push(product);
  }

  getProduct(id: string) {
    return this.listProduct.find((item: Product) => item.id === id);
  }

  removeProduct(id: string) {
    this.listProduct = this.listProduct.filter(
      (item: Product) => item.id !== id
    );
  }

  updateProduct(product: Product) {
    this.listProduct = this.listProduct.map((item: Product) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
  }

  getTotalPrice() {
    return this.listProduct.reduce((sum, product: Product) => {
      return (
        sum +
        (product.price * product.quantity * (100 - product.discount)) / 100
      );
    }, 0);
  }
}
