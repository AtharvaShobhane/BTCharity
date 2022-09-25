import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  )
}
