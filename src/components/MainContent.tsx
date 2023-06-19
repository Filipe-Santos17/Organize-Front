import { jsonDataPattern } from "../helpers/Types";
import Button from "./Button";
import BoardItem from "./BoardItem";

export default function MainContent({ listData, setModalTask }: jsonDataPattern) {

  if (listData.length) {
    return (
      <div className="content-board with-items">
        {listData.map(board => board.columns.map((item, numItem) => (
          <section className="board-column" key={numItem}>
            <h3>{item.name}</h3>
            <section className="board-box">
              {item.tasks.map((subItem, numId) => (
                <BoardItem key={numId} itemContent={subItem} setModalTask={setModalTask}/>
              ))}
            </section>
          </section>
        )))}
      </div>
    )
  } else {
    return (
      <div className="content-board no-items">
        <p>This board is empty. Create a new column to get started.</p>
        <Button content="+ Add New Column" />
      </div>
    )
  }
}
