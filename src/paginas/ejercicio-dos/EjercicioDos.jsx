import { useState } from "react";
import "./EjercicioDos.css";
import { useForm } from "react-hook-form";

function EjercicioDos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNombre = (e) => {
    if (e.target.validationMessage !== "") {
      setErrorNombre("Ingresar solamente valores alfabéticos");
    } else {
      setErrorNombre("");
    }
    setNombre(e.target.value);
  };
 */
  const onSubmit = (data) => {
    alert("El mail es: " + data.email + "y la contrasenia: " + data.password);
  };

  return (
    <div className="App">
      <div className="contenedor">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Iniciar sesión</h2>
          <br />
          <label htmlFor="Correo" className="item">
            <p>Email *</p>
            <input
              placeholder="Email*"
              {...register("email", {
                required: true,
                pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
            <br />
            {errors.email?.type === "required" && (
              <span>Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>Se requiere un formato valido de email</span>
            )}
          </label>
          <br />
          <label htmlFor="Password" className="item">
            <br />
            <p>Password *</p>
            <input
              type="password"
              placeholder="Password*"
              {...register("password", { required: true, minLength: 8 })}
            />
            <br />
            {errors.password?.type === "required" && (
              <span>Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Se precisa un minimo de 8 caracteres</span>
            )}
          </label>

          <br />
          <br />

          <br />
          <button className="button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EjercicioDos;
