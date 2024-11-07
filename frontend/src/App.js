import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
