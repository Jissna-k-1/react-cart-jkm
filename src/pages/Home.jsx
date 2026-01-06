import React, { useEffect } from 'react'
import Header from '../components/Header'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const dispatch  = useDispatch()
const {loading,allProducts,error} = useSelector(state=>state.productReducer)
// console.log(allProducts);

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])


  return (
    <>
         <Header/>

 <div className='container py-5'>
  {
    loading?
    <div className="text-center my-5 fw-bolder fs-5">
      <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyYWRmMWdmcWplMndvZ2M4ODVwbXQyeWw0Zm5maHQ1eGZwajM3cmJ5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/200.gif" alt="" />
      loading....</div>
      :
       <div className="row my-5">
{/* duplicate */}
{
  allProducts?.length>0?
  allProducts?.map(product=>(
    <div key={product?.id} className="col-md-3 mb-2">

      <Card >
      <Card.Img height={'250px'} className='p-3' variant="top" src={product?.thumbnail} />
      <Card.Body className='text-center'>
        <Card.Title> {product?.title}</Card.Title>
        <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'> View More...</Link>
      </Card.Body>
    </Card>
</div>
  ))
  :
  <p className='fs-5 fw-bold my-5'>product not found!!!</p>
}
  </div>
  }
 
 </div>
    </>
  )
}

export default Home
