import { FormEvent } from "react"
import useForm from "../hooks/useForm"
import InputBox from "../components/InputBox"
import LoginBackground from "../components/login/LoginBackground"
import useFetch from "../hooks/useFetch"
import Button from "../components/Button"
import { routeCreateUser } from "../helpers/Api"
import { useNavigate } from "react-router-dom"
import ErroMsg from "../components/ErroMsg"

export default function LoginUser() {

  const nameForm = useForm('name')
  const emailForm = useForm('email')
  const passwordForm = useForm('password')
  const { load, erro, data, request } = useFetch()
  const navigate = useNavigate()

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    if (emailForm.validate() && passwordForm.validate() && nameForm.validate()) {
      const { url, options } = routeCreateUser({
        name: nameForm.value,
        email: emailForm.value,
        password: passwordForm.value,
      });

      const { json, response } = await request(url, options)

      if(json.status?.ok){
        navigate('/')
      }
    }
  }

  return (
    <section className="login-form-page">
      <LoginBackground/>
      <section className="section-form">
        <form onSubmit={handleSubmitForm}>
          <div className="title-box">
            <h1>Fazer Login</h1>
            <p>Seja bem-vindo(a)!  Insira seu e-mail e senha para entrar em sua conta.</p>
          </div>
          <div className="inputs-form">
            <InputBox labelName="Nome" idName="user" typeInput="text" placeholderText="Insira seu nome" {...nameForm}/>
            <InputBox labelName="Email" idName="email" typeInput="text" placeholderText="Insira seu email" {...emailForm}/>
            <InputBox labelName="Senha" idName="password" typeInput="password" placeholderText="Insira sua senha " {...passwordForm}/>
            {erro && <ErroMsg erro={erro}/>}
          </div>
          {load ? <Button content="Carregando..." disabled/> : <Button content="Entrar" type="submit"/> }
        </form>
      </section>
    </section>
  )
}
