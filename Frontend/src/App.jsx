import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publiclayout from "./layouts/Publiclayout";
import Home from "./component/Home";
import Login from "./zone auth/Login";
import Register from "./zone auth/Register";
import Profile from "./zone user/Profile";
import Sidebar from "./component/Sidebar";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Publiclayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/sd" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
