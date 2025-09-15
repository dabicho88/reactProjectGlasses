import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function DetalleGafa() {
  const [gafas, setGafas] = useState([])

  const elBuenas = useParams()

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
  const productoMatch = gafas.find(lentilla => lentilla.id === elBuenas.id)

  if (!productoMatch) { //Se asegura de que exista producto Match
    return 
  }

  return (
    <section className='detallon'>
      <img src={productoMatch.foto}/>
      <p>
        <span className='propi'>Nombre</span><span className='valor'>{productoMatch.nombre}</span>
        <span className='propi'>Precio</span><span className='valor'>${productoMatch.precio}</span>
        <span className='propi'>Género</span><span className='valor'>{productoMatch.genero}</span>
        <span className='propi'>Tipo</span><span className='valor'>{productoMatch.tipo}</span>
        <span className='propi'>ID</span><span className='valor'>{productoMatch.id}</span>
      </p>
    </section>

    )  
}

