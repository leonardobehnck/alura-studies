import React, { useState } from "react";
import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario"
import Lista from "../Components/Lista"
import style from "../Pages/App.module.scss"
import { ITarefa } from "../types/tarefa";



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(_tarefa =>{
      ...tarefas, 
      selecionado: tarefaSelecionada.id === tarefaSelecionada.id ? true : false
    }))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div >
  );
}

export default App;
