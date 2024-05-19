import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Api from "./pages/Api";
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
            <Route path="/api" element={<Api />} />
          </Routes>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;