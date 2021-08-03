const Product = require("../models/productModel.js");

async function getProduct(req, res) {
  try {
    const products = await Product.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

async function getProductById(req, res, id) {
  try {
    const product = await Product.findById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getProduct, getProductById };
