
export default function ModalOpenTask({setModalTask}: {setModalTask: React.Dispatch<React.SetStateAction<boolean>>}) {

  function closeModalTask(e: Event){
    if(e.currentTarget === e.target){
      setModalTask(false);
    }
  }
  
  return (
    <div className="container-modal" onClick={closeModalTask}>
      <section className="modal-open-task">
        <h1 className="modal-title">Research pricing points of various competitors and trial different business models</h1>
        <p className="modal-text">We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</p>
        <section className="modal-box-tasks">
          <p className="modal-legend-tasks">Subtasks (2 of 3)</p>
          <section>

          </section>
        </section>
        <section>
          <p>Current Status</p>
          <select name="" id=""></select>
        </section>
      </section>
    </div>
  )
}
