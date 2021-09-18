import "./App.css";
import React, { useState } from "react";
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

  // export function ListTodos() {
  //   const [todos, setTodos] = useState([]);

  //   function toggleComplete(id) {
  //     const updatedTodos = [...todos].map((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     });

  //     setTodos(updatedTodos);
  //   }

  //   function deleteTodo(id) {
  //     const updatedTodos = [...todos].filter((todo) => todo.id !== id);

  //     setTodos(updatedTodos);
  //   }

  //   {
  //     todos.map((todo) => (
  //       <div id="todo__container" key={todo.id}>
  //         <div id="todo__content">
  //           <div id="todo__info">
  //             {/* conditional rendering */}
  //             {/* se o todoEditing corresponder ao id do todo, mostra dois inputs
  //               para que o usuário consiga editar o todo, senão, mostre somente a div padrão */}
  //             {todoEditing === todo.id ? (
  //               <form>
  //                 <div>
  //                   <input
  //                     type="text"
  //                     required
  //                     onChange={(event) => setEditingText(event.target.value)}
  //                     placeholder={todo.title}
  //                     value={editingText}
  //                   />
  //                   <br />
  //                   <input
  //                     type="text"
  //                     required
  //                     onChange={(event) =>
  //                       setEditingDescription(event.target.value)
  //                     }
  //                     maxLength={"100"}
  //                     placeholder={todo.desc}
  //                     value={editingDescription}
  //                   />
  //                 </div>
  //               </form>
  //             ) : (
  //               <div>
  //                 <h3>{todo.title}</h3>
  //                 <p>{todo.desc}</p>
  //               </div>
  //             )}
  //           </div>
  //           <div id="todo__buttons">
  //             <input
  //               type="checkbox"
  //               onChange={() => toggleComplete(todo.id)}
  //               checked={todo.completed}
  //             />
  //             {todoEditing === todo.id ? (
  //               <button type="submit" onClick={() => editTodo(todo.id)}>
  //                 Enviar edição
  //               </button>
  //             ) : (
  //               <button onClick={() => setTodoEditing(todo.id)} id="todo__edit">
  //                 Editar
  //               </button>
  //             )}
  //             <button onClick={() => deleteTodo(todo.id)} id="todo__delete">
  //               Deletar
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ));
  //   }
  // }

  // ============================================================================================

  const [atividades, setAtividades] = useState([]);

  // percorre o useState values, pega seu nome e descrição
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
      [event.target.descricao]: event.target.descricao,
    });
  }
  // ============================================================================================

  // quando o usuário aperta o botão criar, percorre todo o array atividades
  // e seta os seus determinados valores
  function handleSubmit(event) {
    event.preventDefault();
    setAtividades([
      ...atividades,
      {
        id: uuid(),
        isInEditMode: false,
        nome: values.atividade,
        descricao: values.descricao,
        checkTrabalho: values.trabalho,
        checkPessoal: values.pessoal,
      },
    ]);
  }
  // ============================================================================================

  //percorre o array atividades, filtra a atividade pelo ID e a deleta
  function deleteTodo(id) {
    const updatedTodos = atividades.filter((atividade) => atividade.id !== id);
    setAtividades(updatedTodos);
  }
  // ============================================================================================

  //função que mapeia as atividades, checa se o id da atividade é o mesmo
  // e verifica se o valor de checkTrabalho/checkPessoal é true, então a transfere para a outra categoria
  function editTodo(id) {
    const updatedTodos = atividades.map((atividade) =>
      atividade.id === id
        ? {
            ...atividade,
            isInEditMode: !atividade.isInEditMode,
          }
        : atividade
    );
    console.log(updatedTodos)
    setAtividades(updatedTodos);
  }
  // ============================================================================================

  return (
    // ==========================================================================================
    <div className="App">
      <div id="formContainer">
        <form id="inputForm" onSubmit={handleSubmit}>
          <input
            maxLength="50"
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
          <label htmlFor="trabalho"> Trabalho </label>
          <input
            name="pessoal"
            id="pessoal"
            type="radio"
            checked={values.pessoal}
            onChange={() => {
              setValues({ ...values, trabalho: false, pessoal: true });
            }}
          />
          <label htmlFor="pessoal"> Pessoal </label>
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
                <div key={atividade.id} className="todosContainer">
                  <div className="todos">
                    {
                      atividade.isInEditMode ? (
                        <div>
                          {/* aqui vai ficar a render  */}
                          <input type="text" />
                        </div>
                      ) : (
                      <>
                        <h2> {atividade.nome}</h2>
                        <p>{atividade.descricao}</p>
                        <button onClick={() => deleteTodo(atividade.id)}>
                          Apagar
                        </button>
                        <button onClick={() => editTodo(atividade.id)}>
                          Editar
                        </button>
                      </>
                      )
                    } 
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
                <div key={atividade.id} className="todosContainer">
                  <div className="todos">
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
