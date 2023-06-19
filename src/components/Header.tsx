import Button from "./Button";

export default function Header() {
  return (
    <header className="header-content">
      <h1 className='title-content'>Platform Launch</h1>
      <div className="header-button-box">
        <Button content="+ Add New Task" handleClickButton={() => null} isDisabled={true}/>
        <span className="header-options"></span>
      </div>
    </header>
  )
}
