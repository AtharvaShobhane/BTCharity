import React from 'react'
import './navbar.css';
import {
  BrowserRouter as Router,
  useNavigate
} from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navbar_blur">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">  BTCharity</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-home" id="navbarNavDropdown">
      <ul className="navbar-nav ">
      <li>
        <button className="explore" onClick={() => navigate("/") }>Home<span className="icon-right after"></span></button>
        </li>
        <li><a href='#intro-example'>
        <button className="explore" onClick={() => navigate("/") }>About Us<span className="icon-right after"></span></button></a>
        </li>
        <li>
        <button className="explore">Join<span className="icon-right after"></span></button>
        </li>
        <li>
        <button className="explore experience" onClick={() => navigate("/donationpage") } >Experience<span className="icon-right after"></span></button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
