import { Widgets } from "./dbConnectors";

const productDB = {};

const resolvers = {
  getProduct: async ({ id }) => Widgets.findById({ _id: id }),
  getAllProducts: () => Widgets.find({}),
  createProduct: async ({
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
  updateProduct: async ({ input }) =>
    Widgets.findByIdAndUpdate({ _id: input.id }, input, { new: true }),
  deleteProduct: async ({ id }) =>
    Widgets.findByIdAndDelete({ _id: id })
      .then(() => "Deleted")
      .catch(({ message }) => message),
};

export default resolvers;
