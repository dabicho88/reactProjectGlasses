import {useState, useEffect } from 'react'
import { Counter } from './Counter'
import { useParams } from 'react-router-dom'

export function DetalleGafa() {
  const [gafas, setGafas] = useState([])

  const elBuenas = useParams()

  useEffect(()=>{

  async function cargaItems(){
  try{
    const cargaUno = await fetch('https://mocki.io/v1/626953f6-f27a-4cad-a07f-94f534d52bab')
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
      <div>
        <span className='propi'>Nombre</span><span className='valor'>{productoMatch.nombre}</span>
        <span className='propi'>Precio</span><span className='valor'>${productoMatch.precio}</span>
        <span className='propi'>Género</span><span className='valor'>{productoMatch.genero}</span>
        <span className='propi'>Tipo</span><span className='valor'>{productoMatch.tipo}</span>
        <span className='propi'>ID</span><span className='valor'>{productoMatch.id}</span>
        <Counter elId={productoMatch.id}/>
      </div>
    </section>

    )  
}

