const Product = require('../controllers/product.controller')

module.exports = (app) => {
    app.get("/api/sneakers", Product.findAll);
}
