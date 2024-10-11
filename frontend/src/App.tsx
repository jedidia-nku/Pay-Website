import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import About from "./Pages/About";
// import QuickLinksPage from "./Pages/Products";
import Services from "./Pages/services";
import LogIn from "./components/login";
import SignIn from "./components/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/about" element={<About />} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route path="/SignUp" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
