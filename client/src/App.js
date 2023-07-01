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
  const WEBSERVICE = "https://letscooktasty.onrender.com";

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home WEBSERVICE={WEBSERVICE} />} />
          <Route path="/login" element={<Login WEBSERVICE={WEBSERVICE} />} />
          <Route
            path="/register"
            element={<Register WEBSERVICE={WEBSERVICE} />}
          />
          <Route
            path="/savedrecipe"
            element={<Savedrecipe WEBSERVICE={WEBSERVICE} />}
          />
          <Route
            path="/addrecipe"
            element={<Addrecipe WEBSERVICE={WEBSERVICE} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
