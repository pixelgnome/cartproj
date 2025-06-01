// import the class from Models
const Product = require("../models/product");

// const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  //instantiate new product from class, pass it the title from form then save it to array
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // next, instantiate products and fetch them from array
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });

  // Product.fetchAll(products => {
  //   res.render('shop', {
  //     prods: products,
  //     pageTitle: 'Shop',
  //     path: '/',
  //     hasProducts: products.length > 0,
  //     activeShop: true,
  //     productCSS: true
  //   });
  // });
};
