import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/contato" element={<Contato />}/>
        <Route path = "/empresa" element={<Empresa />}/>
      </Routes>
    </Router>
  );
}

export default App;
