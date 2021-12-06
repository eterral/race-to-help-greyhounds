import "./App.css";
import update from "react-addons-update";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { grabRescues } from "./services";
import { grabRacetracks } from "./services";
import Header from "./components/Header";
import About from "./components/About";
import Rescues from "./components/Rescues";
import Racetracks from "./components/Racetracks";

function App() {
  const [rescues, setRescues] = useState([]);
  const [racetracks, setRacetracks] = useState([]);
  const [rescueStates, setRescueStates] = useState([]);
  const [racetrackStates, setRacetrackStates] = useState([]);

  useEffect(() => {
    const getAllRescues = async () => {
      const response = await grabRescues();
      setRescues(response);
      setRescueStates([
        ...new Set(response.map((rescue) => rescue.fields.state).sort()),
      ]);
    };
    getAllRescues();
  }, []);

  useEffect(() => {
    const getAllRacetracks = async () => {
      const response = await grabRacetracks();
      setRacetracks(response);
      setRacetrackStates([
        ...new Set(
          response.map((racetracks) => racetracks.fields.state).sort()
        ),
      ]);
    };
    getAllRacetracks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/rescues"
          element={<Rescues states={rescueStates} rescues={rescues} />}
        />
        <Route
          path="/racetracks"
          element={
            <Racetracks states={racetrackStates} racetracks={racetracks} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
