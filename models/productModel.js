const products = require("../data/products.json");

function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

module.exports = { find };
