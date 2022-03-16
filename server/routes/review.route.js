const Review = require('../controllers/review.controller')


module.exports = (app) => {
    app.get("/api/reviews", Review.findAll);
    app.post("/api/reviews", Review.create);
    app.get("/api/reviews/:id", Review.findOne);
    app.put("api/reviews/:id", Review.update);
    app.delete("/api/reviews/:id", Review.delete);
}
