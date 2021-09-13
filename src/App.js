import "./App.css";
import React, { useState, setState } from "react";
import uuid from "react-uuid";

export function App() {
  const [values, setValues] = useState([
    {
      descricao: "",
      atividade: "",
      trabalho: true,
      pessoal: false
    }
  ]);

  const [atividades, setAtividades] = useState([]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
      [event.target.descricao]: event.target.descricao
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAtividades([
      ...atividades,
      {
        id: uuid(),
        nome: values.atividade,
        descricao: values.descricao,
        checkTrabalho: values.trabalho,
        checkPessoal: values.pessoal
      }
    ]);
  }

  function deleteTodo(id) {
    const updatedTodos = atividades.filter((atividade) => atividade.id !== id);

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
      <div id="container">
        <div>
          <h1>Trabalhos</h1>
          {atividades.map(
            (atividade) =>
              atividade.checkTrabalho === true && (
                <div className="todos" key={atividade.id}>
                  Todo: {atividade.nome} <br />
                  descricao: {atividade.descricao} <br />
                  id: {atividade.id} <br />
                  <button onClick={() => deleteTodo(atividade.id)}>
                    deletar
                  </button>
                </div>
              )
          )}
        </div>

        <div>
          <h1>Pessoal</h1>
          {atividades.map(
            (atividade) =>
              atividade.checkPessoal === true && (
                <div className="todos" key={atividade.id}>
                  Todo: {atividade.nome} <br />
                  descricao: {atividade.descricao} <br />
                  id: {atividade.id} <br />
                  <button onClick={() => deleteTodo(atividade.id)}>
                    deletar
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    </div>
    // ==================================================================================================
  );
}
