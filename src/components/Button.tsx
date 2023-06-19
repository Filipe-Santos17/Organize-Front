import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  content: string,
  handleClickButton?: () => void | null,
  isDisabled?: boolean,
}

export default function Button({content, handleClickButton, isDisabled = false}: ButtonProps) {
  return (
    <button className="btn" onClick={handleClickButton} disabled={isDisabled}>{content}</button>
  )
}
