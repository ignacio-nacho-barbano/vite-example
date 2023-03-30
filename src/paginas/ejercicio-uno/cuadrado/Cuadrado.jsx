import { useState } from "react";
import "./Cuadrado.css";

const Cuadrado = (props) => {
  const [color, setColor] = useState(props.colorInicial);

  return (
    <div
      className="cuadrado"
      style={{ backgroundColor: color }}
      onClick={() => {
        setColor(
          color === props.colorInicial ? props.colorFinal : props.colorInicial
        );
      }}
    ></div>
  );
};

export default Cuadrado;
