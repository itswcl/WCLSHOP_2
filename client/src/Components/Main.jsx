import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import Pagination from './Pagination';

const Main = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);

  // 1. for use to pass state variable to the target page 02042022
  const history = useHistory()


  useEffect(() => {
    axios.get("http://localhost:8000/api/sneakers")
      .then(res => {
        setProducts(res.data.convertedData)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const indexOfLastProduct = currentPage * productsPerPage; // 20
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 20 - 20
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  // 2. push page to target URL 02042022
  const handleDetailLink = (product) => {
    // sent to detail page and pass product object 02042022
    history.push(`/products/${product.id}`, { product: product })

  }


  return (
    <div className='container'>
      <div className='row col-12'>

        {
          loading
            ? loading
            :
            currentProducts.map((product) => {
              return (
                <div className='col' key={product.id}>
                  <Link onClick={() => handleDetailLink(product)}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width="245px"
                      height="175px"
                    />
                    <p>
                      {/* {JSON.stringify(product.id)} */}
                      <div>{product.name}</div>
                      <div>Size {product.size}</div>
                      <div>{product.price}</div>
                    </p>
                  </Link>
                </div>
              )
            })
        }
        <Pagination totalProducts={products.length} productsPerPage={productsPerPage} paginate={paginate} />
      </div>
    </div >
  );
};

export default Main;
