import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router basename="/myProfile">
      <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Início</Link>
        <Link to="/sobre" style={{ margin: '0 1rem' }}>Sobre</Link>
        <Link to="/contato" style={{ margin: '0 1rem' }}>Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
