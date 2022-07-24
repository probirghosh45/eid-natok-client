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
import MySubscription from "./Components/MySubscription";
import ManageSubscription from "./Components/ManageSubscription";
import ManageUser from "./Components/ManageUser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* <Route element={<RequiredAuth/>} >
         <Route path="/natok/:id" element={<NatokDetails/>} />
        </Route> */}
{/* 
        // Not Working Dashboard Route
        <Route element={<RequiredAuth/>}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/add-natok" element={<AddNatok />} />
          <Route path="/dashboard/manage-natok" element={<ManageNatok />} />
        </Route>
        </Route> */}



        <Route path="/natok/:id" element={<RequiredAuth><NatokDetails/></RequiredAuth>}></Route>

        {/* Dashboard Route */}


        <Route path="dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/add-natok" element={<AddNatok />} />
          <Route path="/dashboard/manage-natok" element={<ManageNatok />} />
          <Route path="/dashboard/my-subscription" element={<MySubscription/>} />
          <Route path="/dashboard/manage-subscription" element={<ManageSubscription/>} />
          <Route path="/dashboard/manage-user" element={<ManageUser/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
