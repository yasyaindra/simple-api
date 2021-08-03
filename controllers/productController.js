const Product = require("../models/productModel.js");
const { getPostData } = require("../utils");

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

async function createProduct(req, res) {
  try {
    const body = await getPostData(req);

    const { title, description, price } = JSON.parse(body);

    const product = {
      title,
      description,
      price,
    };

    const newProduct = await Product.create(product);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Data not Found" }));
    } else {
      const body = await getPostData(req);

      const { title, description, price } = JSON.parse(body);

      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };

      const updatedProduct = await Product.update(id, productData);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedProduct));
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Data Not Found" }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: `product ${id} has been deleted` }));
    }
  } catch (error) {}
}

module.exports = { getProduct, getProductById, createProduct, updateProduct, deleteProduct };
