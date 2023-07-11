import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
<>
<div className="bg-notfound ">
<div className="notFound d-flex justify-content-center align-items-end pt-5 h-100">
<div className="notFound-content mb-100 pt-5 text-center">
<h3 className='fw-bold'>Oops!.....</h3>
  <p>Page is not Found, Please Go to <Link to='/' className='color fw-bold'>Home</Link></p>
</div>
</div>
</div>
</>

  )
}
