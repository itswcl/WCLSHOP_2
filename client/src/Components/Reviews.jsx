import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pagination from './Pagination';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/reviews")
            .then(res => setReviews(res.data.reviews))
            .catch(err => console.log(err))
    }, [])

    return <div className='container'>
        {/* {JSON.stringify(reviews)} */}
        <div className='row'>
            {
                reviews.map((review) => {
                    return (
                        <div className='row col-9 rounded-pill m-5' style={{ backgroundColor: "orange" }}>
                            <div className='d-flex justify-content-start mx-5'>
                                <p className='mx-5'>Name: {review.name}</p>
                                <p>Date: {review.createdAt.slice(0,10)}</p>
                            </div>
                            <div>
                                <img className='border border-secondary mx-1'
                                    src={review.image}
                                    alt={review._id} width="150px" height="100px" />
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>;
};

export default Reviews;
