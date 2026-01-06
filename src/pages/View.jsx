import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slice/cartSlice'

function View() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  // get product id from url
  const {id} = useParams()
  // console.log(id);
  // state for storing product to be viewed
  const [product,setProduct] = useState({})
  console.log(product);

  useEffect(()=>{
    if(sessionStorage.getItem("products")){
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist = ()=>{
  const existingProduct = userWishlist?.find(item=>item.id==id)
  if(existingProduct){
  // alert("product already in wishlist")
    Swal.fire({
    title: 'Sorry',
    text: 'product already in your wishlist',
    icon: 'error',
    confirmButtonText: 'OK'
   })
  }else{
// add product to wishlist in redux store - dispatch action
  dispatch(addToWishlist(product))
  }
  }

  const handleCart = ()=>{
    const existingProduct = userCart?.find(item=>item.id==id)
    dispatch(addToCart(product))
     Swal.fire({
    title: 'Completed',
    text: existingProduct?`Quantitiy of ${product.title}, is updated successfully `: 'product is added to your cart...',
    icon: 'success',
    confirmButtonText: 'OK'
   })
  }
  
  
  return (
    <>
      <Header/>
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img className='img-fluid w-50' src={product?.thumbnail} alt="product" />
            <div className="d-flex justify-content-evenly mt-5">
              <button onClick={handleWishlist} className='btn btn-primary'>ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-success'>ADD TO CART</button>

            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-5">
            <h1 className='fw-bold'>{product?.title}</h1>
            <h3 className='text-danger'>$ {product?.price}</h3>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <h4>Description : <span className='fs-6'>{product?.description}</span></h4>

            <h3 className='my-3'>Client Reviews</h3>
            {/* duplicate div */}
            {
              product?.reviews?.length>0?
              product?.reviews?.map((item,index)=>(
              <div key={index} className="border rounded p-3 shadow mb-2">
              <p><span className='fw-border'>{item?.reviewerName} :</span> {item?.comment} </p>
              <p>Rating : {item?.rating}  <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
              </div>
              ))
              :
              <div>No Client Reviews are Available</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default View
