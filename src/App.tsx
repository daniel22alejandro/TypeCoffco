import { Routes, Route } from "react-router-dom";
import LoginPlantilla from "./components/plantillas/login/LoginPlantilla";
import HomePlantilla from "./components/plantillas/home/HomePlantilla";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPlantilla />}></Route>
      <Route path={"/home"} element={<HomePlantilla />}></Route>
    </Routes>
  );
}

export default App;
