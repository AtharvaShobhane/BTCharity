import React from 'react'

  

export default function Content1() {
  return (
    <div
    id='intro-example'
    className='p-5 text-center bg-image'
    style={{ backgroundColor: 'black' }}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='text-white'>
          <h1 className='mb-3'>About Us</h1>
          <h6 className='mb-4'>In today's time where charity frauds are on the rise we present you a solution eith the help of Blockchain Technology and the best Frontend Technology. What more's ,you ask? An exclusive NFT will be transferred to you once you donate.</h6>
         <button className="explore " style={{background: 'blue'}}>Join<span className="icon-right after"></span></button>
        </div>
      </div>
    </div>
  </div>
  )
}
