import React from 'react'
import Header from '../components/Header'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
         <Header/>
 <div className='container py-5'>
  <div className="row my-5">
{/* duplicate */}
<div className="col-md-3 mb-2">
  <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} className='p-3' variant="top" src="https://m.media-amazon.com/images/I/61vuiK6d7RL.jpg" />
      <Card.Body className='text-center'>
        <Card.Title> Title</Card.Title>
        <Link to={`/products/id/view`} className='btn btn-secondary'> View More...</Link>
      </Card.Body>
    </Card>
</div>
  </div>
 </div>
    </>
  )
}

export default Home
