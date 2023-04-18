import { CartService } from './product';

const Apple = {
  id: '1',
  name: 'Apple',
  price: 100,
  quantity: 1,
  discount: 5
};
const Banana = {
  id: '2',
  name: 'Banana',
  price: 100,
  quantity: 1,
  discount: 5
};

describe('Test CRUD Product', () => {
  describe('Add product', () => {
    const cart = new CartService([]);
    cart.addProduct(Apple);
    cart.addProduct(Banana);
    it('List Product have Apple, Banana', () => {
      expect(cart.listProduct).toHaveLength(2);
    });
    it('When Add Product, List Product will contain Apple', () => {
      expect(cart.listProduct).toContain(Apple);
    });
    it('When Add Product, List Product will contain Banana', () => {
      expect(cart.listProduct).toContain(Banana);
    });
  });

  describe('Get Product', () => {
    const cart = new CartService([Apple, Banana]);
    it('Product no exist', () => {
      expect(cart.getProduct('001')).toBeUndefined();
    });
    it('Product exist', () => {
      expect(cart.getProduct('1')).toMatchObject(Apple);
      expect(cart.getProduct('2')).toMatchObject(Banana);
    });
  });

  describe('Remove product', () => {
    const cart = new CartService([Apple, Banana]);
    cart.removeProduct('1');
    cart.removeProduct('2');
    it('Remove Apple Success', () => {
      cart.getListProduct();
      expect(cart.listProduct).not.toMatchObject(Apple);
    });
    it('Remove Banana Success', () => {
      cart.getListProduct();
      expect(cart.listProduct).not.toMatchObject(Banana);
    });
  });

  describe('Update product', () => {
    const AppleUpdate = {
      id: '1',
      name: 'Apple Update',
      price: 100,
      quantity: 2,
      discount: 10
    };
    const BananaUpdate = {
      id: '2',
      name: 'Banana Update',
      price: 100,
      quantity: 2,
      discount: 10
    };
    const cart = new CartService([Apple, Banana]);
    cart.updateProduct(AppleUpdate);
    cart.updateProduct(BananaUpdate);
    it('Apple Product is update', () => {
      cart.getListProduct();
      expect(cart.listProduct).toContain(AppleUpdate);
    });
    it('Banana Product is update', () => {
      cart.getListProduct();
      expect(cart.listProduct).toContain(BananaUpdate);
    });
  });

  describe('Get Total Price', () => {
    const cart = new CartService([Apple, Banana]);
    cart.getTotalPrice();
    it('TotalPrice of Product', () => {
      expect(cart.getTotalPrice()).toEqual(190);
    });
  });
});
