import "./App.css";
import React, { useState, setState } from "react";
import uuid from "react-uuid";

export function App() {
  const [values, setValues] = useState([
    {
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

  // quando o usuário aperta o botão criar, percorre todo o array atividades
  // e seta os values
  function handleSubmit(event) {
    event.preventDefault();
    setAtividades([
      ...atividades,
      {
        id: uuid(),
        nome: values.atividade,
        descricao: values.descricao,
        checkTrabalho: values.trabalho,
        checkPessoal: values.pessoal,
      },
    ]);
  }

  //percorre o array atividades, filtra a atividade pelo ID e a deleta
  function deleteTodo(id) {
    const updatedTodos = atividades.filter((atividade) => atividade.id !== id);

    setAtividades(updatedTodos);
  }

  function editTodo(id) {
    const updatedTodos = atividades.map((atividade) =>
      atividade.id === id && atividade.checkTrabalho === true
        ? {
            ...atividade,
            checkTrabalho: false,
            checkPessoal: true,
          }
        : atividade.id === id && atividade.checkPessoal === true
        ? {
            ...atividade,
            checkTrabalho: true,
            checkPessoal: false,
          }
        : atividade
    );

    setAtividades(updatedTodos);
  }

  return (
    // ==========================================================================================
    <div className="App">
      <div id="formContainer">
        <form id="inputForm" onSubmit={handleSubmit}>
          <input
            name="atividade"
            type="text"
            value={values.atividade}
            onChange={handleChange}
            placeholder="O que deve ser feito?"
            required
          />
          <input
            maxLength="100"
            name="descricao"
            type="text"
            value={values.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            required
          />
          <h2>Categoria</h2>
          <input
            name="trabalho"
            id="trabalho"
            type="radio"
            checked={values.trabalho}
            onChange={() => {
              setValues({ ...values, pessoal: false, trabalho: true });
            }}
          />
          <label htmlFor="trabalho"> Trabalho</label>
          <input
            name="pessoal"
            id="pessoal"
            type="radio"
            checked={values.pessoal}
            onChange={() => {
              setValues({ ...values, trabalho: false, pessoal: true });
            }}
          />
          <label htmlFor="pessoal"> Pessoal</label> <br />
          <button id="criarButton" type="submit">
            Criar
          </button>
        </form>
      </div>
      {/* ========================================================================================== */}

      {/* ========================================================================================== */}
      <div id="todosContainer">
        <div>
          <h1>Trabalhos</h1>
          {atividades.map(
            (atividade) =>
              atividade.checkTrabalho === true && (
                <div className="todosContainer">
                  <div className="todos" key={atividade.id}>
                    <h2> {atividade.nome}</h2>
                    <p>{atividade.descricao}</p>
                    <button onClick={() => deleteTodo(atividade.id)}>
                      Apagar
                    </button>
                    <button onClick={() => editTodo(atividade.id)}>
                      Editar
                    </button>
                  </div>
                </div>
              )
          )}
        </div>

        <div>
          <h1>Pessoal</h1>
          {atividades.map(
            (atividade) =>
              atividade.checkPessoal === true && (
                <div className="todosContainer">
                  <div className="todos" key={atividade.id}>
                    <h2> {atividade.nome}</h2>
                    <p>{atividade.descricao}</p>
                    <button onClick={() => deleteTodo(atividade.id)}>
                      Apagar
                    </button>
                    <button onClick={() => editTodo(atividade.id)}>
                      Editar
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
    // ==================================================================================================
  );
}
