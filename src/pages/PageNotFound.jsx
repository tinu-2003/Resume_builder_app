import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'80vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <img width={'500px'} src="https://webartdevelopers.com/blog/wp-content/uploads/2020/02/CSS-Train-404-Page.gif" alt="404" />
      <h2>PageNotFound</h2>
      <p>Sorry, We Couldn't Find The Page</p>
      <Link to={'/'} className='btn btn-primary'>Back To Home</Link>
    </div>
  )
}

export default PageNotFound