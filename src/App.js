import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/MyNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import LoginPage from './pages/LoginPage';
import RentYourCarPage from './pages/RentYourCarPage';
import RentCarPage from './pages/RentCarPage';

function App() {
  return (
    <div>
      <Navbar />
      <Container className='mt-3'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/rentYourCar" element={<RentYourCarPage />} />
          <Route path="/rentCar" element={<RentCarPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
