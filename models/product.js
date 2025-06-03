// Let's save to files instead of an array
// we have to import file system and path in order to save to local
const fs = require("fs");
const path = require("path");

 const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
  
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  // Builds the product info
  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
}

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findByID(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};
