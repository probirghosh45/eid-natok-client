import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddNatok from "./Components/AddNatok";
import ManageNatok from "./Components/ManageNatok";
import DashboardHome from "./Components/DashboardHome";
import NatokDetails from "./Components/NatokDetails";
import "./App.css";
import Login from "./Pages/Login/Login";
import RequiredAuth from "./Pages/Login/RequiredAuth";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route element={<RequiredAuth/>} >
      <Route path="/natok/:id" element={<NatokDetails/>} />
      </Route> */}

        <Route path="/natok/:id" element={<RequiredAuth><NatokDetails/></RequiredAuth>}></Route>
        <Route path="dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>}>
          <Route index element={<RequiredAuth><DashboardHome /></RequiredAuth>} />
          <Route path="/dashboard/add-natok" element={<RequiredAuth><AddNatok /></RequiredAuth>} />
          <Route path="/dashboard/manage-natok" element={<RequiredAuth><ManageNatok /></RequiredAuth>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
