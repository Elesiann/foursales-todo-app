import "./App.css";
import React, { useState } from "react";

export function App() {
  const [value, setValue] = useState({
    trabalho: false,
    pessoal: true,
  });

  const [atividades, setAtividades] = useState({
    trabalho: ["trabalho", "oi"],
    pessoal: ["pessoal", "oieeeeeeeeeeeeeee"],
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" /> <br />
        <textarea name="" id="" cols="20" rows="5"></textarea> <br />
        <input
          name="radio"
          type="radio"
          checked={value.pessoal}
          id="pessoal"
          onChange={() => {
            setValue({ ...value, pessoal: true, trabalho: false });
          }}
        />{" "}
        <label htmlFor="pessoal">Pessoal</label>
        <input
          name="radio"
          type="radio"
          checked={value.trabalho}
          id="trabalho"
          onChange={() => {
            setValue({ ...value, pessoal: false, trabalho: true });
          }}
        />{" "}
        <label htmlFor="trabalho">Trabalho</label> <br />
        <button type="submit">Criar</button>
      </form>

      <div>
        {value.trabalho === true &&
          atividades.trabalho.map((trabalhos) => <div>{trabalhos}</div>)}

        {value.pessoal === true &&
          atividades.pessoal.map((pessoal) => <div>{pessoal}</div>)}
      </div>
    </div>
  );
}
