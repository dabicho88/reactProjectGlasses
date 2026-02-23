import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UnLink } from './UnLink'
import { Counter} from './Counter'


export function Listcontainer() {

  let gafasFilter
  const elPath = window.location.href.toString()
  const [gafas, setGafas] = useState([])
  const catego = useParams()
  let lasKeysEnLocal = []
  for(let ki=0;ki < localStorage.length;ki++){
    lasKeysEnLocal.push(localStorage.key(ki))
  }


  useEffect(()=>{
  async function cargaItems(){
  try{
    const cargaUno = await fetch('https://mocki.io/v1/afeb93de-03cf-4838-bc7d-769e0e0f13a1')
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
  
  elPath.includes('carrito') ? gafasFilter = gafasFilter.filter((len) => lasKeysEnLocal.includes(String(len.id))) : gafasFilter = gafasFilter

  return (
    <section className='listado'>
      {gafasFilter.map(len => {
        return (
      <div className='card'>
        <UnLink seccion={`/gafas/${len.id}`} />
        <img src={len.foto}/>
        <span className='propi'>Nombre</span><span className='valor'>{len.nombre}</span>
        <span className='propi'>Precio</span><span className='valor'>${len.precio}</span>
        <span className='propi'>Género</span><span className='valor'>{len.genero}</span>
        <Counter elId={len.id}/>
      </div>
      )
      })}    
    </section>

    )
}



