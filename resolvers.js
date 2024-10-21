const Product = require('./models/Product');

const resolvers = {
  Query: {
    products: async () => await Product.findAll(),
    product: async (_, { id }) => {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Product not found');
      return product;
    },
  },
  Mutation: {
    createProduct: async (_, { name, price, description, stock }) => {
      return await Product.create({ name, price, description, stock });
    },
    updateProduct: async (_, { id, name, price, description, stock }) => {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Product not found');

      // Update only provided fields
      product.name = name !== undefined ? name : product.name;
      product.price = price !== undefined ? price : product.price;
      product.description = description !== undefined ? description : product.description;
      product.stock = stock !== undefined ? stock : product.stock;

      await product.save();
      return product; // Optionally return the updated product
    },
    deleteProduct: async (_, { id }) => {
      const product = await Product.findByPk(id);
      if (!product) throw new Error('Product not found');

      await product.destroy();
      return { id: product.id }; // Return the deleted product's ID
    },
  },
};

module.exports = resolvers;
