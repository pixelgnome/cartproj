const products = [];

module.exports = class Product {

    // Builds the product info
    constructor(t) {
        this.title = t;
    }

    // stores the product info to array (soon to DB)
    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }


}