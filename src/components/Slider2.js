import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import {
    BrowserRouter as Router,
    useNavigate
  } from 'react-router-dom';
  
export default function Slider2() {
  const navigate = useNavigate();
  return (
    <MDBCarousel showControls showIndicators fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='./images/donation.jpg'
        alt='...'
        style={{height:600}}
      >
        <h5>Click Below with trust in machines to help humans</h5>
        <button className="explore rounded-pill slider_join" onClick={() => navigate("/donationpage") }>Donate Now<span className="icon-right after"></span></button>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./images/donation2.jpg'
        alt='...'
        style={{height:600}}
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='./images/donation3.jpg'
        alt='...'
        style={{height:600}}
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  )
}
