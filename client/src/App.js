import "./App.css";
import update from "react-addons-update";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { grabRescues } from "./services";
import Header from "./components/Header";
import About from "./components/About";
import Rescues from "./components/Rescues";

function App() {
  const [rescues, setRescues] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const getAllRescues = async () => {
      const response = await grabRescues();
      setRescues(response);
      setStates([...new Set(response.map((rescue) => rescue.fields.state))]);
    };
    getAllRescues();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/rescues"
          element={<Rescues states={states} rescues={rescues} />}
        />
        <Route path="/racetracks" element={<Racetracks />} />
      </Routes>
    </div>
  );
}

export default App;
