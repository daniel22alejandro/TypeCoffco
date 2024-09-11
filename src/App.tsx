import { Routes, Route } from "react-router-dom";
import LoginPlantilla from "./components/plantillas/login/LoginPlantilla";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPlantilla />}></Route>
    </Routes>
  );
}

export default App;
