import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Savedrecipe } from "./pages/savedrecipe";
import { Addrecipe } from "./pages/addrecipe";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  const WEBSERVICE = "https://letscooktasty.onrender.com";

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home WEBSERVICE={WEBSERVICE} />} />
          <Route
            exact
            path="/login"
            element={<Login WEBSERVICE={WEBSERVICE} />}
          />
          <Route
            exact
            path="/register"
            element={<Register WEBSERVICE={WEBSERVICE} />}
          />
          <Route
            exact
            path="/savedrecipe"
            element={<Savedrecipe WEBSERVICE={WEBSERVICE} />}
          />
          <Route
            exact
            path="/addrecipe"
            element={<Addrecipe WEBSERVICE={WEBSERVICE} />}
          />
          <Route exact path="*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
