import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from './components/layout/Container/Container'
import Home from './components/pages/Home'
import Contratos from './components/pages/Contratos'
import Usucapiao from './components/pages/Usucapiao'
import Distratos from './components/pages/Distratos'
import Regularizacao from './components/pages/Regularizacao'

function App() {
  return (
    <Router>
      <Container customClass="min-height">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Usucapiao" element={<Usucapiao />} />
          <Route exact path="/Contratos" element={<Contratos />} />
          <Route exact path="/Distratos" element={<Distratos />} />
          <Route exact path="/Regularizacao" element={<Regularizacao />} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
