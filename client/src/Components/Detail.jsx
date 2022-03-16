import React from 'react';
// 3. import useLocation 02042022
import { useLocation } from 'react-router-dom'

const Detail = (props) => {
    // 3. use useLocation to get the product object 02042022
    const location = useLocation();
    // 4. get product by location.state./obj key/ 02042022
    const product = location.state.product;

    return <div className='container d-flex justify-content-center'>
        {/* {JSON.stringify(product)} */}
        <div className='row'>
            <div>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    width="600px"
                    height="400px"
                />
            </div>
            <div className='d-flex m-5'>
                <div className='col-5'>
                    <div><strong>Date Added:</strong> {product.dataAdded}</div>
                    <div><strong>Brand</strong> {product.brand}</div>
                    <div><strong>Available by enquiry</strong> sales@solewcl.com</div>
                </div>
                <div className='col-5'>
                    <div><strong>Name</strong> {product.name}</div>
                    <div><strong>Color</strong> {product.color}</div>
                    <div><strong>PID</strong> {product.PID}</div>
                    <div><strong>Size</strong> {product.size}</div>
                    <div><strong>Price</strong> {product.price}</div>
                </div>
            </div>
        </div>

    </div>;
};

export default Detail;
