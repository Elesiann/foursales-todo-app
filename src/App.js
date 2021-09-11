import "./App.css";
import React, { useState } from "react";

export function App() {
  const [values, setValues] = useState({
    atividade: "",
    trabalho: false,
    pessoal: true,
  });

  const [atividades, setAtividades] = useState([]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAtividades([
      ...atividades,
      {
        nome: values.atividade,
        checkTrabalho: values.trabalho,
        checkPessoal: values.pessoal,
      },
    ]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="atividade"
          type="text"
          value={values.atividade}
          onChange={handleChange}
        />
        {/* <textarea name="" id="" cols="20" rows="5" placeholder="Descrição"></textarea> <br /> */}
        <input
          name="trabalho"
          type="radio"
          checked={values.trabalho}
          onChange={() => {
            setValues({ ...values, pessoal: false, trabalho: true });
          }}
        />
        <label htmlFor="trabalho">Trabalho</label>

        <input
          name="pessoal"
          type="radio"
          checked={values.pessoal}
          onChange={() => {
            setValues({ ...values, trabalho: false, pessoal: true });
          }}
        />
        <label htmlFor="trabalho">Pessoal</label>

        <button type="submit">Criar</button>
      </form>

      <div>
      <h1>Trabalhos</h1>
        {atividades.map(
          (atividade) =>
            atividade.checkTrabalho === true && (
              <div>Todo: {atividade.nome}</div>
            )
        )}

<h1>Pessoal</h1>
        {atividades.map(
          (atividade) =>
            atividade.checkPessoal === true && (
              <div>Todo: {atividade.nome}</div>
            )
        )}
      </div>
    </div>
  );
}
