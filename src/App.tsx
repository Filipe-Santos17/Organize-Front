import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ModalOpenTask from "./components/modais/OpenTask";
//Fecth para o backend para pegar o numero de tarefas

import data from "./data.json";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState<object>({})
  const [openModalTask, setOpenModalTask] = useState<boolean>(false)

  return (
    <>
      <Sidebar listData={data.boards} />
      <main className="main-content">
        <Header />
        <MainContent listData={data.boards} setModalTask={setOpenModalTask} />
      </main>
      {openModalTask && <ModalOpenTask setModalTask={setOpenModalTask} />}
    </>
  )
}

export default App
