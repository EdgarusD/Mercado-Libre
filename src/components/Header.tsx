import React from "react";
import * as M from "@mantine/core";
import Logo from "../Images/logo.png";
import "../styles/Header.css";
import { FaSistrix, FaBell, FaUserAlt, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <M.Flex direction="column" className="mantine-header-content">
      <M.Grid m={0} className="mantine-row">
        <M.Box className="mantine-left-content">
          <M.Image
            src={Logo}
            classNames={{
              root: "mantine-image-root",
              figure: "mantine-Image-image",
            }}
          />
        </M.Box>
        <M.Grid m={0} className="mantine-center-content">
          <M.TextInput
            radius={0}
            classNames={{
              root: "mantine-search",
              input: "mantine-input",
            }}
          />
          <M.Button
            classNames={{
              root: "mantine-search-icon",
            }}
          >
            <FaSistrix />
          </M.Button>
        </M.Grid>
        <M.Box className="mantine-headers-contents"></M.Box>
      </M.Grid>
      <M.Grid m={0} className="mantine-row">
        <M.Box className="mantine-left-content">direccion componente</M.Box>
        <M.Grid m={0} className="mantine-center-content">
          <M.Box className="mantine-menu-element">Categorias</M.Box>
          <M.Box className="mantine-menu-element">Ofertas</M.Box>
          <M.Box className="mantine-menu-element">Historial</M.Box>
          <M.Box className="mantine-menu-element">Supermercado</M.Box>
          <M.Box className="mantine-menu-element">Vender</M.Box>
        </M.Grid>
        <M.Flex >
          <M.Box className="mantine-menu-right-element">Usuario</M.Box>
          <M.Box className="mantine-menu-right-element">Mis compras</M.Box>
          <M.Box className="mantine-menu-right-element">Favoritos</M.Box>
          <M.Box className="mantine-menu-right-element">
            <FaBell />
          </M.Box>
          <M.Box className="mantine-menu-right-element">
            <FaShoppingCart />
          </M.Box>
        </M.Flex>
      </M.Grid>
    </M.Flex>
  );
}
