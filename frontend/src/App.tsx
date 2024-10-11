import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import About from "./Pages/About";
// import QuickLinksPage from "./Pages/Products";
import Services from "./Pages/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
