import './App.css';
import Api from './pages/Api';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Api />
      <Footer />  
    </div>
  );
}

export default App;
