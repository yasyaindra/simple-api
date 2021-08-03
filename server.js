const http = require("http");
const { getProduct, getProductById, createProduct, updateProduct } = require("./controllers/productController");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProduct(req, res);
  } else if (req.url.match(/\api\/products\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getProductById(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (req.url.match(/\api\/products\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found!" }));
  }
});

server.listen(PORT, () => {
  console.log(`running in http://localhost:${PORT}`);
});
