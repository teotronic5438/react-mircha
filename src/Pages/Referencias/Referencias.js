import React, { createRef, useRef} from 'react'

export default function Referencias() {
  // let refMenu = createRef(); // createRef solo es usado en class Component
  let refMenuBtn = useRef()
  let refMenu = useRef()

  // console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {

    // Ya no lo hacemos de este manera con vainilla, usaremos ref
    // const $menu = document.getElementById("menu");
    // // el obketo que origino el evento es e.target
    // if(e.target.textContent === "Menu"){
    //   e.target.textContent = "Cerrar";
    //   $menu.style.display = "block";
    // } else {
    //   e.target.textContent = "Menu";
    //   $menu.style.display = "none";
    // }
    if(refMenuBtn.current.textContent === "Menu"){
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block"
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none"
    }

  }

  return (
    <div className='container text-center'>
      <h2 className="text-primary">Referencias</h2>
      <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
      <nav id='menu' ref={refMenu} style={{display: 'none'}}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>Seccion 1</a><br />
        <a href='#'>Seccion 2</a><br />
        <a href='#'>Seccion 3</a><br />
        <a href='#'>Seccion 4</a><br />
        <a href='#'>Seccion 5</a><br />
      </nav>
    </div>
  )
}
