import {useState, useEffect } from 'react'
import { UnLink } from './UnLink'

export function ListcontainerM() {

  const [gafas, setGafas] = useState([])
  useEffect(()=>{

  async function cargaItems(){
  try{
    const cargaUno = await fetch('https://mocki.io/v1/d4093cdd-6d12-4b82-9a7b-2d5834e18c1b')
     const cargaDos = await cargaUno.json()
     setGafas(cargaDos.lentes)
  }
    catch(error){
        console.log(error)
    }
  }
  cargaItems()

  }, [])
  
  const gafasGen = gafas.filter((gafaG) => gafaG.genero === 'mujer')

  return (
    <section className='listado'>
    {
      gafasGen.map((len) => {
     return (
      <div className='card'>
        <img src={len.foto}/>
        <span className='propi'>Nombre</span><span className='valor'>{len.nombre}</span>
        <span className='propi'>Precio</span><span className='valor'>${len.precio}</span>
        <span className='propi'>Género</span><span className='valor'>{len.genero}</span>
        <UnLink seccion={`/gafas/${len.id}`} titleSeccion='Ver más' />
      </div>
      )
    })}
    </section>

    )  
}

