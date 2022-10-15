import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/portfolio" element={ <Portfolio/> } />
          <Route path="/about" element={ <About/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
