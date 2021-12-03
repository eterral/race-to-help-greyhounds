import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Rescues from "./components/Rescues";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/rescues" element={<Rescues />} />
      </Routes>
    </div>
  );
}

export default App;
