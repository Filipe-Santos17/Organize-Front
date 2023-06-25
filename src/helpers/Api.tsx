const url = 'http://localhost:8080/api/'

/* Rotas de Data-Boards */
export function getData(token: string, idUser: number) {
  return {
    url: `${url}column/${idUser}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorizarion": token,
      },
    },
  }
}

/* Rotas de Usuário */
//Criar user
export function routeCreateUser(value: object) {
  return {
    url: `${url}user/create`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    },
  }
}

//Login 
export function routeLoginUser(value: object) {
  return {
    url: `${url}user/login`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    },
  }
}

//Validar token do usuário
export function routeValidateUser(token: string) {
  return {
    url: `${url}user/valid-token`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorizarion": token,
      },
    },
  }
}

//Recuperar senha do usuário
export function routeChangePass(value: object) {
  return {
    url: `${url}user/forget-password`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    },
  }
}

/* Rotas de Column */
//Create Column
export function routeCreateColumn(id: number, value: object) {
  return {
    url: `${url}column/${id}/create`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorizarion": localStorage.getItem('token'),
      },
      body: JSON.stringify(value)
    },
  }
}