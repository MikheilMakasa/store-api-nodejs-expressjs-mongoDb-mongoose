require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // deleting all existing products
    await Product.deleteMany();
    // adding new products
    await Product.create(jsonProducts);
    // terminate
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
