import React from 'react'
import Header from '../components/Header'
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slice/wishlistSlice';
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slice/cartSlice'


function Wishlist() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  
 const handleCart = (product)=>{
    const existingProduct = userCart?.find(item=>item.id==product.id)
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))
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
      {/* wishlist withcontent */}  
     {
      userWishlist?.length>0 ?
       <div className="row my-5">
       {/* <h1 className='fs-3'>My Wishlist</h1> */}

          {
            userWishlist?.map(product=>(
              <div className="col-md-3 mb-2">
                {/* card - bootstrap react */}
           <Card style={{ width: '18rem' }}>
           <Card.Img height={'250px'} className='p-3' variant="top" src={product?.thumbnail} />
           <Card.Body className='text-center'>
           <Card.Title> {product?.title}</Card.Title>
             <div className="d-flex justify-content-evenly my-1">
               <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark}/> </button>  
               <button onClick={()=>handleCart(product)} className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus}/> </button>  
               </div>
           </Card.Body>
           </Card>
          </div>
            ))
          }
      </div>
      :
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img  width={'130px'}  src="https://cdn-icons-png.flaticon.com/512/628/628627.png" alt="empty cart" />
        <h3 style={{marginTop:'13px'}}>Wishlist is Empty</h3>
        <Link to={'/'} className='btn btn-primary mt-2'>Add More</Link>
      </div>
     }
    </div>
    </>
  )
}

export default Wishlist
