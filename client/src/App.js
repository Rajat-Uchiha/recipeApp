import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Savedrecipe } from "./pages/savedrecipe";
import { Addrecipe } from "./pages/addrecipe";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/savedrecipe" element={<Savedrecipe />} />
          <Route path="/addrecipe" element={<Addrecipe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
