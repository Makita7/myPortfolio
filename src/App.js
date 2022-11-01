import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import UxUiDesign from './pages/UxUiDesign';
import PieceOne from './pages/Frontend-Subpages/PieceOne';
import PieceTwo from './pages/Frontend-Subpages/PieceOne';

/**
 * I want to make flavicon with a star or a & symbol
**/

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/portfolio/frontend" element={ <Portfolio/> }/>
          <Route path='/portfolio/ux-ui' element={ <UxUiDesign/> } />
          <Route path='pieceOne' element={ <PieceOne/> } />
          <Route path='pieceTwo' element={ <PieceTwo/> } />
          <Route path="/about" element={ <About/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
