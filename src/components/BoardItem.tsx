import { itemContent } from "../helpers/Types"

export default function BoardItem({ itemContent, setModalTask }: { itemContent: itemContent, setModalTask: React.Dispatch<React.SetStateAction<boolean>> }) {
  const tasksAlready = itemContent.subtasks.filter(item => item.isCompleted === true)

  function openModalTask(){
    setModalTask(true);
  }

  return (
    <div className="board-item" onClick={openModalTask}>
      <h3>{itemContent.title}</h3>
      <h5>{tasksAlready.length} of {itemContent.subtasks.length} substasks</h5>
    </div>
  )
}
