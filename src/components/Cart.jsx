import {ItemList} from './ItemList'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export function Cart(){

  const [listLentes, setlistLentes] = useState([])

	const params = useParams()

  useEffect(()=>{
    async function getAllProductos(){
      try{
        //const result1 = await fetch('https://mp9af92b2abd7234b469.free.beeceptor.com/gafaOscura')
        const result1 = await fetch('../public/gafasDBtamaldulce.json')
        const result2 = await result1.json()
        setlistLentes(result2)
        }
      catch(elError){
        console.log(elError)
      }

    }
    
    getAllProductos()
  },[])
	return(
    <>
    <div className='contItemlist cart'>
    <h2>Carrito</h2>
        {listLentes.filter(gafa => 
          sessionStorage.getItem(`articulo-${gafa.id}`) > 0
          )
        .map(gafa => 
            <ItemList key={gafa.id} laImagen={gafa.img} eltitulo={gafa.title_name} elPrecio={gafa.price} elId={gafa.id} price={gafa.price}/>
          )
        }
    </div>
    </>
		)
}