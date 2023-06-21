const url = 'http://localhost:8080/api/'

export function getData(token: string) {
  return {
    url: url + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    },
  }
}

//Login 
export function routeCreateUser(value: object) {
  return {
    url: url + "create",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    },
  }
}

export function routeLoginUser(value: object) {
  return {
    url: url + "create",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value)
    },
  }
}