import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FileBase64 from 'react-file-base64';


const ReviewForm = () => {
  const [review, setReview] = useState({
    name: "",
    comment: "",
    image: "",
  })

  const [errors, setErrors] = useState([])

  const history = useHistory()

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/reviews", review)
      .then(res => {
        console.log(res.data)
        history.push("/reviews")
      })
      .catch(err => {
        // const { errors } = err.response.data.error;
        const messages = Object.keys(errors).map(error => errors[error].message)
        // console.log(messages)
        setErrors(messages);
      })

  }


  return <div className='container col-5 mt-5' >
    <form onSubmit={onSubmitHandler} className='form-horizontal' >
      <p className='form-group'>
        <label>Name</label>
        <input className='form-control' type="text" onChange={e => setReview({ ...review, name: e.target.value })} value={review.name} />
      </p>

      <p className='form-group'>
        <label>Comment</label>
        <textarea className='form-control' cols="30" rows="10" onChange={e => setReview({ ...review, comment: e.target.value })} value={review.comment}></textarea>
      </p>
      <p className='form-group'>
        <label for="img">Upload Image</label>
        <FileBase64 className="form-control-file" type="file" multiple={false} onDone={({ base64 }) => {
          console.log(base64)
          setReview({ ...review, image: base64 })
        }} />
        {
          review.image
            ? <img src={review.image} alt="" width="245px" height="175px" />
            : <p></p>
        }
      </p>
      <button className='btn btn-primary'>Submit</button>
    </form>
    {
      errors.map((err) => {
        return <div style={{ backgroundColor: "red" }}>{err}</div>
      })
    }
  </div>;
};

export default ReviewForm;
