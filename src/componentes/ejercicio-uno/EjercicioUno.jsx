import Cuadrado from "./cuadrado/Cuadrado";
import "./EjercicioUno.css";

const EjercicioUno = (props) => {
  return (
    <section id="ejercicio-1">
      <h1>Ejercicio Uno</h1>
      <Cuadrado colorInicial="red" colorFinal="brown" />
      <Cuadrado colorInicial="yellow" colorFinal="orange" />
      <Cuadrado colorInicial="brown" colorFinal="black" />
      <Cuadrado colorInicial="blue" colorFinal="darkblue" />
    </section>
  );
};

export default EjercicioUno;
