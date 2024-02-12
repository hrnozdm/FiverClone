import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Gigs from "./pages/gigs/Gigs";

function App() {
  
  return (
    <div>
      <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gigs" element={<Gigs/>} />
       </Routes>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
