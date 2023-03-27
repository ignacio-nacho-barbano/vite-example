import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EjercicioUno from "./componentes/ejercicio-uno/EjercicioUno";
import EjercicioDos from "./componentes/ejercicio-dos/EjercicioDos";

function App() {
  let estadoRoto = true;
  const [color, setColor] = useState('red');
  const [viendoEjercicioUno, setViendoEjercicioUno] = useState(true);



  const cambiarColor = () => {
    setColor('blue');
  };

  const onClick = () => {
    console.log("llamado a la función");
    setViendoEjercicioUno(!viendoEjercicioUno);
    // estadoRoto = !estadoRoto;
  };

  console.log("se renderizo");
  console.log("El estado es: " + estadoRoto);

  return (
    <div className="App">
      <main>
        {viendoEjercicioUno && <h2>Estoy viendo el ejercicio 1 WOHHHH</h2>}
        {viendoEjercicioUno ? <EjercicioUno  /> : <EjercicioDos />}
        <button onClick={onClick}>Cambiar ejercicio</button>
        <button onClick={cambiarColor}>Cambiar color</button>
      </main>
    </div>
  );
}

export default App;
