import Home from "./Pages/Home/Home";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
