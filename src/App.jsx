import {useState} from "react";
import "./App.css";
import EjercicioUno from "./paginas/ejercicio-uno/EjercicioUno";
import EjercicioDos from "./paginas/ejercicio-dos/EjercicioDos";
import EjercicioR52 from "./paginas/ejercicio-r52/EjercicioR52";

function App() {
  const [ejercicio, setEjercicio] = useState(2);

  const cambiarColor = () => {
    setColor('blue');
  };


  return (
    <div className="App">
      <main>
        {ejercicio === 2 &&<EjercicioR52/>}
        {ejercicio === 1 &&<EjercicioDos/> }
        {ejercicio === 0 && <EjercicioUno/>}

        <div>
          <button onClick={()=>setEjercicio(2)}>Ejercicio 3</button>
          <button onClick={()=>setEjercicio(1)}>Ejercicio 2</button>
          <button onClick={()=>setEjercicio(0)}>Ejercicio 1</button>
        </div>
      </main>
    </div>
  );
}

export default App;
