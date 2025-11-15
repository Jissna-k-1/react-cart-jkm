import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'80vh'}} className="d-flex justify-content-center align-items-center flex-column">
      <h1 className='fw-bolder'>404</h1>
      <img className='img-fluid w-25' src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="pnf" />
      <h6>the page you are looking is not found</h6>
    <Link to={'/'} className='btn btn-primary mt-3'>BACK TO HOME</Link>

    </div>
  )
}

export default Pnf
