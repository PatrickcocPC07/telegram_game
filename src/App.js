import "./App.css";
import GameContainer from "./GameContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<GameContainer />} />
      </Routes>
    </div>
  );
}

export default App;
