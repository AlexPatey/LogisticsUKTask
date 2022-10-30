
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
