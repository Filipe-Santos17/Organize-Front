import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  content: string,
  handleClickButton?: () => void | null,
  isDisabled?: boolean,
  classStyle?: string
}

export default function Button({content, handleClickButton, isDisabled = false, classStyle}: ButtonProps) {
  return (
    <button className={`btn ${classStyle ? classStyle : '' }`} onClick={handleClickButton} disabled={isDisabled}>{content}</button>
  )
}
