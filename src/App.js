import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import ApiSearchBar from "./pages/Api";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/api" element={<ApiSearchBar />} />
          </Routes>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;