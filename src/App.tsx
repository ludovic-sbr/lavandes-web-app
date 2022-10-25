import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from "./components/organisms/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Orders from "./components/pages/Orders";
import Locations from "./components/pages/Locations";

const App: React.FC = () => {
    return (
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>

        </BrowserRouter>
    )
}

export default App;
