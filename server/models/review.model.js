const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "{PATH} must be include"],
        minlength: [3, "{PATH} must be at least 3 characters"]
    },

    comment: {
        type: String,
        required: [true, "{PATH} must be include"],
        minlength: [3, "{PATH} must be at least 3 characters"]
    },

    image: {
        type: String,
    }
}, { timestamps: true })

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;