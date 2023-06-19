const url = ''

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