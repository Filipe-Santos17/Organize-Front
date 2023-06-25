import { jsonDataPattern } from "../helpers/Types";
import Button from "./Button";
import BoardItem from "./BoardItem";

export default function MainContent({ boards, setModalTask }: jsonDataPattern) {
  if (boards.length) {
    return (
      <div className="content-board with-items">
        {boards.map(board => (
          <section className="board-column" key={board.id}>
            <h3>{board.name}</h3>
            <section className="board-box">
              {board.tasks.map((task, index) => (
                <BoardItem key={index} itemContent={task} setModalTask={setModalTask}/>
              ))}
            </section>
          </section>
        ))}
      </div>
    )
  } else {
    return (
      <div className="content-board no-items">
        <p>This board is empty. Create a new column to get started.</p>
        <Button content="+ Add New Column"/>
      </div>
    )
  }
}
