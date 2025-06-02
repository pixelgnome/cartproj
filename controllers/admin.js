// import the class from Models
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
};

exports.postAddProduct = (req, res, next) => {
  //instantiate new product from class, pass it the title from form then save it to array
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/products");
};

exports.getProducts = (req, res, next) => {
  // next, instantiate products and fetch them from array
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

