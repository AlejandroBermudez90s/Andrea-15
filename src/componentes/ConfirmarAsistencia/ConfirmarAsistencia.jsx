import './ConfirmarAsistencia.css'
import { useState } from "react";


const ConfirmarAsistencia = () => {
  const [form, setForm] = useState({
    nombre: "",
    asistencia: "Sí",
    acompanantes: 0,
    comentarios: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/TU_URL_AQUI/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setEnviado(true);
  };

  if (enviado) {
    return <h3>¡Gracias por confirmar tu asistencia! 💙</h3>;
  }

  return (
    <section className="confirmar">
      <h2>Confirmar asistencia</h2>

      <form onSubmit={handleSubmit}>
        <label>Familia</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ejemplo: Familia Bermúdez"
          required
          onChange={handleChange}
        />
        <label>Asisto</label>
        <select name="asistencia" onChange={handleChange}>
          <option value="Sí">Sí asistiré</option>
          <option value="No">No asistiré</option>
        </select>

        <label>Número de personas</label>
        <input
          type="number"
          name="acompanantes"
          min="0"
          placeholder="Nº personas"
          onChange={handleChange}
        />

        <label>Nombres de asistentes</label>
        <textarea
          name="comentarios"
          placeholder="Ejemplo: Andrea, Ana, Alejandro"
          onChange={handleChange}
        />

        <button type="submit">Confirmar</button>
      </form>
    </section>
  );
};

export default ConfirmarAsistencia;
