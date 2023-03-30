import Cuadrado from "./cuadrado/Cuadrado";
import "./EjercicioUno.css";

const EjercicioUno = (props) => {
  const propsCuadrado1 = { colorInicial: "red", colorFinal: "brown" };
  const propsCuadrado2 = { colorInicial: "yellow", colorFinal: "orange" };
  const crearProps = (colorInicial, colorFinal) => {
    return { colorInicial: colorInicial, colorFinal: colorFinal };
  };
  return (
    <section id="ejercicio-1">
      <h1>Ejercicio Uno</h1>
      <Cuadrado {...propsCuadrado1} />
      <Cuadrado {...propsCuadrado2} />
      <Cuadrado {...crearProps("blue", "green")} />
      <Cuadrado colorInicial="blue" colorFinal="darkblue" />
      <Cuadrado colorInicial="brown" colorFinal="black" />
      <Cuadrado colorInicial="blue" colorFinal="darkblue" />
    </section>
  );
};

export default EjercicioUno;
