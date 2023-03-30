import {useState} from "react";
import "./App.css";
import EjercicioUno from "./paginas/ejercicio-uno/EjercicioUno";
import EjercicioDos from "./paginas/ejercicio-dos/EjercicioDos";
import EjercicioR52 from "./paginas/ejercicio-r52/EjercicioR52";

function App() {
  const [viendoEjercicioUno, setViendoEjercicioUno] = useState(true);

  const cambiarColor = () => {
    setColor('blue');
  };

  const onClick = () => {
    setViendoEjercicioUno(!viendoEjercicioUno);
  };

  return (
    <div className="App">
      <main>
      <EjercicioR52/>
      </main>
    </div>
  );
}

export default App;
