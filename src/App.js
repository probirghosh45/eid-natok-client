import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddNatok from "./Components/AddNatok";
import ManageNatok from "./Components/ManageNatok";
import DashboardHome from "./Components/DashboardHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/add-natok" element={<AddNatok />} />
          <Route path="/dashboard/manage-natok" element={<ManageNatok />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
