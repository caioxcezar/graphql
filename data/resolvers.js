import { Widgets } from "./dbConnectors";

const productDB = {};

const resolvers = {
  getProduct: async ({ id }) => Widgets.findById({ _id: id }),
  createProduct: ({
    input: { name, description, price, soldout, inventory, stores },
  }) => {
    const widget = new Widgets({
      name,
      description,
      price,
      soldout,
      inventory,
      stores,
    });
    widget.id = widget._id;
    return widget.save();
  },
};

export default resolvers;
