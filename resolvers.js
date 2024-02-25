const productDB = {};

class Product {
  constructor(id, { name, description, price, soldout, stores, inventory }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
    this.inventory = inventory;
  }
}

const resolvers = {
  getProducts: ({ id }) => new Product(id, productDB[id]),
  createProduct: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString();
    productDB[id] = input;
    return new Product(id, input);
  },
};

export default resolvers;
