import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Reservations from "./components/Reservations/Reservations";
import OrderOnline from "./components/OrderOnline/OrderOnline";
import Login from "./components/Login/Login";
import CreateAcct from "./components/CreateAcct/CreateAcct";
import Booking from "./components/Booking/Booking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./components/Booking/Confirmation";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Nav />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="order" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreateAcct />} />
          <Route path="booking" element={<Booking />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
