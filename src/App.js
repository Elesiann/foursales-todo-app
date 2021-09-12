import "./App.css";
import React, { useState, setState } from "react";

export function App() {
  const [values, setValues] = useState([
    {
      id: new Date(),
      descricao: "",
      atividade: "",
      trabalho: true,
      pessoal: false,
    },
  ]);

  const [atividades, setAtividades] = useState([]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
      [event.target.descricao]: event.target.descricao,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAtividades([
      ...atividades,
      {
        id: values.id,
        nome: values.atividade,
        descricao: values.descricao,
        checkTrabalho: values.trabalho,
        checkPessoal: values.pessoal,
      },
    ]);
  }

  function deleteTodo(id) {
    const updatedTodos = [...atividades].filter(
      (atividades) => atividades.id !== id
    );
    console.log(values.id);
    setAtividades(updatedTodos);
  }

  return (
    // ==========================================================================================
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="atividade"
          type="text"
          value={values.atividade}
          onChange={handleChange}
        />
        <input
          maxLength="100"
          name="descricao"
          type="text"
          value={values.descricao}
          onChange={handleChange}
        />
        <br />
        <input
          name="trabalho"
          id="trabalho"
          type="radio"
          checked={values.trabalho}
          onChange={() => {
            setValues({ ...values, pessoal: false, trabalho: true });
          }}
        />
        <label htmlFor="trabalho">Trabalho</label>
        <input
          name="pessoal"
          id="pessoal"
          type="radio"
          checked={values.pessoal}
          onChange={() => {
            setValues({ ...values, trabalho: false, pessoal: true });
          }}
        />
        <label htmlFor="pessoal">Pessoal</label> <br />
        <button type="submit">Criar</button>
      </form>
      {/* ========================================================================================== */}

      {/* ========================================================================================== */}
      <div id="container" key={values.id}>
        <div>
          <h1>Trabalhos</h1>
          {atividades.map(
            (atividade) =>
              atividade.checkTrabalho === true && (
                <div className="todos">
                  Todo: {atividade.nome} <br />
                  descricao: {atividade.descricao} <br />
                  id: {values.id} <br />
                  <button onClick={() => deleteTodo()}>deletar</button>
                </div>
              )
          )}
        </div>

        <div key={values.id}>
          <h1>Pessoal</h1>
          {atividades.map(
            (atividade) =>
              atividade.checkPessoal === true && (
                <div className="todos">
                  Todo: {atividade.nome} <br />
                  descricao: {atividade.descricao} <br />
                  id: {values.id} <br />
                  <button onClick={() => deleteTodo()}>deletar</button>
                </div>
              )
          )}
        </div>
      </div>
    </div>
    // ==================================================================================================
  );
}
