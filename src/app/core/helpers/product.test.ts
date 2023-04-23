import { CartService } from './product';

const Apple = {
  id: '1',
  name: 'Apple',
  price: 10000,
  quantity: 5,
  discount: [
    {
      quantity: 1,
      percent: 5,
    },
    {
      quantity: 5,
      percent: 10,
    },
  ],
};
const Banana = {
  id: '2',
  name: 'Banana',
  price: 15000,
  quantity: 1,
  discount: [
    {
      quantity: 1,
      percent: 5,
    },
    {
      quantity: 5,
      percent: 10,
    },
  ],
};

describe('Test CRUD Product', () => {
  describe('When add product', () => {
    const cart = new CartService([]);
    cart.addProduct(Apple);
    cart.addProduct(Banana);
    it('List Product should have Apple, Banana', () => {
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
      expect(cart.getListProduct()).not.toMatchObject(Apple);
    });
    it('Remove Banana Success', () => {
      expect(cart.getListProduct()).not.toMatchObject(Banana);
    });
  });

  describe('Update product', () => {
    const AppleUpdate = {
      id: '1',
      name: 'Apple Update',
      price: 100,
      quantity: 2,
      discount: [
        {
          quantity: 1,
          percent: 5,
        },
        {
          quantity: 9,
          percent: 10,
        },
      ],
    };
    const BananaUpdate = {
      id: '2',
      name: 'Banana Update',
      price: 100,
      quantity: 2,
      discount: [
        {
          quantity: 2,
          percent: 10,
        },
        {
          quantity: 8,
          percent: 10,
        },
      ],
    };
    const cart = new CartService([Apple, Banana]);
    cart.updateProduct(AppleUpdate);
    cart.updateProduct(BananaUpdate);
    it('Apple Product is update', () => {
      expect(cart.getListProduct()).toContain(AppleUpdate);
    });
    it('Banana Product is update', () => {
      expect(cart.getListProduct()).toContain(BananaUpdate);
    });
  });

  describe('Get Total Price', () => {
    const cart = new CartService([Apple, Banana]);
    it('TotalPrice of Product', () => {
      expect(cart.getTotalPrice()).toEqual(59250);
    });
  });
});
