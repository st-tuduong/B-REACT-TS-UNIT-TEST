export interface Cart {
  getListProduct(): void;
  addProduct(data?: any): void;
  getProduct(data?: any): void;
  removeProduct(data?: any): void;
  updateProduct(data?: any): void;
  getTotalPrice(data?: any): void;
}

type Discount = {
  quantity: number;
  percent: number;
}

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount: Discount[];
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

  getDisCount(product: Product) {
    let discount = 0;
    product.discount.forEach(item => {
      if (product.quantity >= item.quantity) {
        discount = item.percent;
      }
    });
    return discount;
  }

  getTotalPrice() {
    return this.listProduct.reduce((sum, product: Product) => {
      return (
        sum +
        (product.price * product.quantity * (100 - this.getDisCount(product))) / 100
      );
    }, 0);
  }
}
