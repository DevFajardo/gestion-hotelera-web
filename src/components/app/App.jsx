import SobreNosotros from "../sobrenosotros/SobreNosotros.jsx";
import Servicios from "../servicios/Servicios.jsx";
import Header from "../header/Header.jsx";
import HabitacionesMain from "../Habitaciones/Main.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservar from "../reservar/reservar.jsx";
import "./App.css";
import Footer from "../footer/Footer.jsx";

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={
    <>
      <Header />
      <Servicios />
      <HabitacionesMain />
      <SobreNosotros />
      <Footer />
    </>} />
    <Route path="/reservar" element={<Reservar />} />
      </Routes>
    </Router>
  );
}

export default App;
