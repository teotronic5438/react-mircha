import React from 'react';
import ContadorHooks from '../../Components/ContadorHooks/ContadorHooks'
import RelojHooks from '../../Components/RelojHooks/RelojHooks';
import ScrollHooks from '../../Components/ScrollHooks/ScrollHooks'

export default function Hooks() {


  return (
    <div className='container'>
      <ContadorHooks titulo="Clickeando" />
      <hr></hr>
      <ScrollHooks />
      <hr></hr>
      <RelojHooks />
    </div>
  )
}
