import { HashRouter, Routes, Route } from "react-router-dom";

//Pages
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="bg-slate-800">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
