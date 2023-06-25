import { FormEvent, useState } from "react"
import useForm from "../../hooks/useForm"
import Button from "../Button"
import InputBox from "../InputBox"
import IconeRemoveBoard from "../../assets/icone-remove-board"
import { routeCreateColumn } from "../../helpers/Api"
import useFetch from "../../hooks/useFetch"

export default function ModalCreateBoard({ setNewBoard, idUser }: { setNewBoard: React.Dispatch<React.SetStateAction<boolean>>, idUser:number }) {

  const [idInput, setIdInputs] = useState<string[]>([newStr()])
  const BoardName = useForm('')
  const { data, load, erro, request } = useFetch()

  //Gera strings aleatorias para serem usadas como id
  function newStr() {
    return Math.random().toString(36).substring(2, 7);
  }

  //Fecha o modal ao clicar fora
  function closeModalNewBoard(e: Event) {
    if (e.currentTarget === e.target) {
      setNewBoard(false)
    }
  }

  //Insere novos Ids
  function insertInputElements() {
    setIdInputs([...idInput, newStr()])
  }

  //Filtra os Ids
  function filterInputElements(item: string) {
    setIdInputs(idInput => {
      return idInput.filter(i => i !== item)
    })
  }

  async function createNewBoard(e: FormEvent) {
    e.preventDefault()

    if (BoardName.validate()) {
      const { url, options } = routeCreateColumn( idUser, { name: BoardName.value })
      const { json, response } = await request(url, options)

      if((await response).status === 201){
        if(json.status === "ok"){
          console.log('foi')
        }
      }
    }
  }

  return (
    <div className="container-modal" onClick={closeModalNewBoard}>
      <form className="modal-new-board" onSubmit={createNewBoard}>
        <h1 className="modal-title">Add New Board</h1>
        <InputBox labelName="Board Name" typeInput="text" idName="board-name" placeholderText="e.g. Web Design" {...BoardName} />
        <section className='box-input box-todos-column'>
          <label className="label-form">Board Columns</label>
          {idInput.map((item, index) => (
            <div className="board-container" key={item}>
              <input type="text" name={`board-${index}`} className="input-form" />
              <div onClick={() => filterInputElements(item)}>
                <IconeRemoveBoard />
              </div>
            </div>
          ))}
        </section>
        <div className="modal-new-board-box-buttons">
          <Button
            content="+ Add New Column"
            classStyle="secondary"
            handleClickButton={() => insertInputElements()}
          />
          <Button content="Create New Board" type="submit" />
        </div>
      </form>
    </div>
  )
}
