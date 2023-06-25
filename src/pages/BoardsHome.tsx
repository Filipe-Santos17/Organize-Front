import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ModalOpenTask from "../components/modais/OpenTask";
import { getData } from "../helpers/Api";
import { dataFetchToken } from "../helpers/Types";
import ModalCreateBoard from "../components/modais/CreateBoard";

export default function BoardsHome({ dados }: { dados: dataFetchToken }) {
  const [board, setBoard] = useState<object | null>(null)
  const [openModalTask, setOpenModalTask] = useState<boolean>(false)
  const [openModalNewBoard, setOpenModalNewBoard] = useState<boolean>(false)

  const { request } = useFetch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    async function getBoards(){
      const { url, options } = getData(token === null ? '' : token, dados.id)
      const {json, response} =  await request(url, options)
      
      if((await response).status === 201){
        if(json.status === "ok"){
          setBoard(json.boards)
        }
      }
    }

    getBoards()
  }, [dados.id, request, token])

  if(board === null){
    return <div>car...</div>
  }

  return (
    <>
      <Sidebar boards={board}  setNewBoard={setOpenModalNewBoard}/>
      <main className="main-content">
        <Header />
        <MainContent boards={board} setModalTask={setOpenModalTask}/>
      </main>
      {openModalTask && <ModalOpenTask setModalTask={setOpenModalTask} />}
      {openModalNewBoard && <ModalCreateBoard setNewBoard={setOpenModalNewBoard} idUser={dados.id}/>}
    </>
  )
}
