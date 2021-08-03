const products = require("../data/products.json");

function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id == id);
    resolve(product);
  });
}

module.exports = { find, findById };
