import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import UxUiDesign from './pages/UxUiDesign';
import FrontEnd from './pages/FrontEnd';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/portfolio" element={ <Portfolio/> }>
            <Route path='ux-ui' element={ <UxUiDesign/> } />
            <Route path='frontend' element={ <FrontEnd/> } />
          </Route>
          <Route path="/about" element={ <About/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
