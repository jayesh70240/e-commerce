import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/Navbar/Services/Services";;

function App() {
  return (
    <Router>
  <Navbar/>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
