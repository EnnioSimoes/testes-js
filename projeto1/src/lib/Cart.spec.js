import Cart from './Cart.js';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Tênis Adidas',
    price: '35388',
  };

  let product2 = {
    title: 'Tênis Adidas AllStar',
    price: '41872',
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price and receive the total amount', () => {
      const item = {
        product,
        quantity: 2,
      };

      cart.add(item);

      expect(cart.getTotal()).toEqual(70776);
    });

    it('should multiply quantity and price and receive the total amount', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets include and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      // expect(cart.checkout()).toMatchInlineSnapshot(`
      expect(cart.checkout()).toMatchSnapshot(); // press u to update snapshot
    });

    it('should return an object with the total and the list of items when sumary is called', () => {
      cart.add({
        product,
        quantity: 5,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      // expect(cart.checkout()).toMatchInlineSnapshot(`
      expect(cart.sumary()).toMatchSnapshot(); // press u to update snapshot
      expect(cart.getTotal()).toBeGreaterThan(0);
    });

    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 3,
      });
      cart.checkout();

      expect(cart.getTotal()).toEqual(0);      
    });
  });
});
