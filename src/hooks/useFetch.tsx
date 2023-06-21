import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<object>({});
  const [load, setLoad] = useState<boolean | string>(false);
  const [erro, setErro] = useState<boolean>(false);

  const request = useCallback(async (url: string, options: object) => {
    let response, json;

    try {
      setErro(false);
      setLoad(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) {
        setErro(json.ErroMsg)
      }
    } catch (err) {
      json = null;
      setErro(err.message);
    } finally {
      setData(json);
      setLoad(false);

      return { 
        response, 
        json 
      };
    }
  }, []);

  return {
    data,
    load,
    erro,
    request
  }
};

export default useFetch;
