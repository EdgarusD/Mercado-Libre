import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error)=>console.log("error" + error));
  }, [url]);

  function getApi() {
    fetch(url)
      .then((response) => {
        console.log('dentro del fetch')
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error)=>console.log("error" + error));
      console.log(data);
  }
  console.log(data);

  return {data, getApi};
}
