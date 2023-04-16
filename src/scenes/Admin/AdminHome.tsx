import React from "react";
import * as M from "@mantine/core";
import { useFetch } from "../../customHooks/useFetch";
import { usePostFetch } from "../../customHooks/usePostFetch";

export default function AdminHome() {
  const [categoria, setCategoria] = React.useState<String>("");
  const [marca, setMarca] = React.useState<String>("");
  // const [categoras, setCategorias] = React.useState<any[]>([]);
  // const [marcas, setMarcas] = React.useState<any[]>([]);

  const url = "http://localhost/Mercado-Libre/";  

  const apipostCategoria = usePostFetch(url + "addCategoria.php");
  let apicategorias = useFetch(url + "getCategorias.php");
  const apipostMarca = usePostFetch(url + "addMarca.php");
  let apimarcas = useFetch(url + "getMarcas.php");

  //componente
  const mostrarCategoria = apicategorias.data.map((categoria: any) => (
    <M.Box>
      <M.Text>{categoria.nombre}</M.Text>
    </M.Box>
  ));

  const mostrarMarca = apimarcas.data.map((marca: any) => (
    <M.Box>
      <M.Text>{marca.nombre}</M.Text>
    </M.Box>
  ));
  //

  const handleSubmitCategoria = (e: any) => {
    e.preventDefault();
    const obj = {
      nombre: categoria,
    };
    apipostCategoria.post(obj);
    window.setTimeout(apicategorias.getApi,40);
    // setCategorias(apicategorias.data);
  };

  const handleSubmitMarca = (e: any) => {
    e.preventDefault();
    const obj = {
      nombre: marca,
    };
    apipostMarca.post(obj);
    apimarcas.getApi();
    // setMarcas(apimarcas.data);
  };

  return (
    <M.Box>
      <M.Text>admin Panel</M.Text>
      {mostrarCategoria}

      <form onSubmit={handleSubmitCategoria}>
        <M.TextInput
          placeholder="Añadir Categoria"
          withAsterisk
          onChange={(event) => setCategoria(event.target.value)}
        />
      </form>

      {mostrarMarca}

      <form onSubmit={handleSubmitMarca}>
        <M.TextInput
          placeholder="Añadir Marca"
          withAsterisk
          onChange={(event) => setMarca(event.target.value)}
        />
      </form>
    </M.Box>
  );
}
