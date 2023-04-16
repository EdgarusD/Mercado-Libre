import { useState } from "react";

export function usePostFetch(url) {
  const [data, setData] = useState();
  function post(objet) {
    try {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(objet),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);

        })
        .catch((error) => console.log("error" + error));
    } catch (error) {}
  };

  return { data, post };
}
