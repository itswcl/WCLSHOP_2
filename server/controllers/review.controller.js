const Review = require('../models/review.model')

module.exports = {
// --------------------------- CRUD ---------------------------
    // --------------------------- READ ALL ---------------------------
    findAll: (req, res) => {
        // get reviews from newest to older one with createdAt 02042022
        Review.find().sort({createdAt: -1})
            .then(reviews => res.json({reviews: reviews}))
            .catch(err => res.json({ message: "❌❌❌ Something Wrong in find reviews ❌❌❌", error: err }))
    },

    // --------------------------- CREATE ---------------------------
    create: (req, res) => {
        Review.create(req.body)
            .then(review => {
                res.json({review: review})
                console.log(review)})
            .catch(err => res.status(400).json({ message: "❌❌❌ Something Wrong create review ❌❌❌", error: err }))
    },

    // --------------------------- READ ONE ---------------------------
    findOne: (req, res) => {
        Review.findById(req.params.id)
            .then(foundReview => res.json({ review: foundReview }))
            .catch(err => res.json({ message: "❌❌❌ Something Wrong in find the review ❌❌❌", error: err }))
    },

    // --------------------------- UPDATE ---------------------------
    update: (req, res) => {
        Review.findByIdAndUpdate(req.params.id, {new:true, runValidators: true})
            .then(updateReview => res.json({review: updateReview}))
            .catch(err => res.status(400).json({ message: "❌❌❌ Something Wrong create a pirate ❌❌❌", error: err }))
    },

    // --------------------------- DELETE ---------------------------
    delete: (req, res) => {
        Review.findOneAndDelete(req.params.id)
            .then(deletedReview => res.json({ review: deletedReview }))
            .catch(err => res.json({ message: "❌❌❌ Something Wrong in update a pirate ❌❌❌", error: err }))
    }
}