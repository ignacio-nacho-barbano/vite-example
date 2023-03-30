import "./EjercicioR52.css";
import { useForm } from "react-hook-form";

const EjercicioR52 = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const showDataInConsole = (data) => {
    console.log(data);
  };


  return (
    <div className="ER52">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit(showDataInConsole)}>
        <label htmlFor="nombre">Nombre</label>
        <input {...register("nombre")} />

        <label htmlFor="correo">Correo</label>
        <input
          placeholder="Correo*"
          {...register("correo", { required: true })}
        />

        

        <label htmlFor="pin">PIN</label>
        <input
          placeholder="PIN*"
          type="password"
          {...register("pin", {
            required: true,
            minLength: 4,
            pattern: /^[0-9]+$/,
          })}
        />
        {errors.pin?.type === "minLength" && (
          <span>El pin debe ser mayor a 4 dígitos</span>
        )}
        {errors.pin?.type === "pattern" && (
          <span>El pin debe ser numérico</span>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EjercicioR52;
