import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Gigs from "./pages/gigs/Gigs";
import Register from "./pages/register/Register"
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/gigs/:id" element={<Gig />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
