import React from 'react'
import Header from '../components/Header'
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  return (
    <>
    <Header/>
    <div className="container py-5">
      {/* wishlist withcontent */}

       <div className="row my-5">
        <h1 className='fs-3'>My Wishlist</h1>

          <div className="col-md-3 mb-2">
           <Card style={{ width: '18rem' }}>
           <Card.Img height={'250px'} className='p-3' variant="top" src="https://m.media-amazon.com/images/I/61vuiK6d7RL.jpg" />
           <Card.Body className='text-center'>
           <Card.Title> Title</Card.Title>
             <div className="d-flex justify-content-evenly my-1">
               <button className='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark}/> </button>  
               <button className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus}/> </button>  
               </div>
      </Card.Body>
    </Card>
</div>
      </div>
    </div>
    </>
  )
}

export default Wishlist
