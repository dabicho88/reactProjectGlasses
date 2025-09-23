import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UnLink } from './UnLink'
import { Counter} from './Counter'


export function Listcontainer() {

  let gafasFilter
  const elPath = window.location.href.toString()
  const [gafas, setGafas] = useState([])
  const catego = useParams()

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

  elPath.includes(catego.gen ? gafasFilter = gafas.filter((len) => len.genero === catego.gen) : gafasFilter = gafas)
  
  return (
    <section className='listado'>
      {gafasFilter.map((len) => {
        return (
      <div className='card'>
        <UnLink seccion={`/gafas/${len.id}`} />
        <img src={len.foto}/>
        <span className='propi'>Nombre</span><span className='valor'>{len.nombre}</span>
        <span className='propi'>Precio</span><span className='valor'>${len.precio}</span>
        <span className='propi'>Género</span><span className='valor'>{len.genero}</span>
        <Counter/>
      </div>
      )
      })}    
    </section>

    )
}



