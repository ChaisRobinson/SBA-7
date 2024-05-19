import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Api from './pages/Api';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/api" element={<Api />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;