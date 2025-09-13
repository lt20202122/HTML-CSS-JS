import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Tech from "./Tech.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
