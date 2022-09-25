import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import DonationPage from './pages/DonationPage';
import LandingPage from './pages/LandingPage';
function App() {
  
  return (
    <Router>    
    <Routes>
    <Route exact path='/' element={<LandingPage />}></Route>
    <Route path="donationpage" element={<DonationPage />} />
    </Routes>
    
    </Router>
  );
}

export default App;
