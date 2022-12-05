import React, { useRef } from "react";
import Container from 'react-bootstrap/Container'

export default function Referencias() {
  //let refMenu = createRef(),
  let refMenu = useRef(),
    refMenuBtn = useRef();

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    /* const $menu = document.getElementById("menu");
    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    } */

    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <Container className="text-center">
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="/referencias">Sección 1</a>
        <br />
        <a href="/referencias">Sección 2</a>
        <br />
        <a href="/referencias">Sección 3</a>
        <br />
        <a href="/referencias">Sección 4</a>
        <br />
        <a href="/referencias">Sección 5</a>
      </nav>
    </Container>
  );
}