import IconeSidebar from "../assets/icone-sidebar"
import IconeSol from "../assets/icone-sol";
import IconeLua from "../assets/icone-lua";
import useThemeColor from "../hooks/useThemeColor";
import { useRef } from "react";
import { jsonDataPattern } from "../helpers/Types";

type sidebar = {
  boards: jsonDataPattern,
  setNewBoard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({ boards, setNewBoard }: sidebar) {
  const [color, setColor] = useThemeColor()
  const inputColorPage = useRef<HTMLInputElement>(null)

  function handleColorPage() {
    setColor(inputColorPage.current?.checked ? 'dark' : 'light')
  }

  function openModalNewBoard(){
    setNewBoard(true)
  }

  return (
    <section className="sidebar-page">
      <header>
        <h1 className="title-sidebar">Organize</h1>
      </header>
      <section className="sidebar-list">
        <p className="sidebar-boards-number">All Boards ({boards.length})</p>
        <ul>
          {boards.map((item, idNumber) => (
            <li key={idNumber} className={idNumber === 0 ? 'active' : ''}>
              <IconeSidebar />
              <p>{item.name}</p>
            </li>
          ))}
          <li className="item-create" onClick={openModalNewBoard}>
            <IconeSidebar />
            <p>+ Create New Board</p>
          </li>
        </ul>
      </section>
      <section className="sidebar-confs">
        <section className="toogle-container">
          <IconeSol />
          <label htmlFor="input-color-page" className="toogle-box" onClick={handleColorPage}>
            <label htmlFor="input-color-page" className={`toogle-checkbox ${color !== 'light' ? 'dark-ativo' : ''}`}></label>
            <input ref={inputColorPage} id="input-color-page" type="checkbox" checked={color === 'dark' ? true : false} onChange={handleColorPage} />
          </label>
          <IconeLua />
        </section>
      </section>
    </section>
  )
}
