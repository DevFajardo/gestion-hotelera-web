import SobreNosotros from "../sobrenosotros/SobreNosotros.jsx";
import Servicios from "../servicios/Servicios.jsx";
import Header from "../header/Header.jsx";
import HabitacionesMain from "../Habitaciones/Main.jsx";
import "./App.css";
import Footer from "../footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Servicios />
      <HabitacionesMain />
      <SobreNosotros />
      <Footer />
    </>
  );
}

export default App;
