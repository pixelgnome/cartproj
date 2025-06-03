// import the class from Models
const Product = require("../models/product");

// const products = [];

exports.getProducts = (req, res, next) => {
  // next, instantiate products and fetch them from array
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

// get individual product by ID
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByID(prodId, (product) => {
    // console.log(product);
    res.render("shop/product-detail", { 
      product: product, 
      pageTitle: product.title,
      path: '/products',
      
    });
  });
};

exports.getIndexPage = (req, res, next) => {
  // next, instantiate products and fetch them from array
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Home Page",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
};
