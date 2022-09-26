import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import {
    BrowserRouter as Router,
    useNavigate
  } from 'react-router-dom';
  import Navbar from '../components/Navbar';
export default function DonationPage() {
  const navigate = useNavigate();
  return (
    <div className='donationpage background-radial-gradient' style={{height:675}} >
<Navbar></Navbar>
<div style={{height:500,width:300}}>
<MDBCard style={{padding:10,margin:30}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle><h3>Organization 1</h3></MDBCardTitle>
        <MDBCardText>
          Your Donations would help us so much.
        </MDBCardText>
        <MDBBtn href='#' onClick={() => navigate("/form") }>Donate</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
    
  )
}
