import { InputBoxType } from "../helpers/Types"
import ErroMsg from "./ErroMsg"

export default function InputBox({ labelName, idName, typeInput, value, onchange, error, onBlur, placeholderText }: InputBoxType) {
  return (
    <div className='box-input'>
      <label className="label-form" htmlFor={idName}>{labelName}</label>
      <input className="input-form" type={typeInput} id={idName} name={idName} value={value} onChange={onchange} onBlur={onBlur} placeholder={placeholderText}/>
      {<ErroMsg erro={error}/>}
    </div>
  )
}
