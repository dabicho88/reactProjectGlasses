import {ItemList} from './ItemList'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import manrecortado from '../assets/img/manrecortado.png'
import womanrecortado from '../assets/img/womanrecortado.png'

export function SectionCategoryList(){

  const params = useParams()
  const [listLentes, setlistLentes] = useState([])

  useEffect(()=>{
    async function getAllProductos(){
      try{
        //const result1 = await fetch('https://mp48a5621f883f13483f.free.beeceptor.com')
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
    <div className='contItemlist'>
    <h2>{params.cat == 'man'? 'Hombre' : (params.cat == 'woman'? 'Mujeres' : undefined)}</h2>
       {listLentes.filter(gafa => gafa.gender == params.cat).map(gafa => 
        <ItemList key={gafa.id} laImagen={gafa.img} eltitulo={gafa.title_name} elPrecio={gafa.price} elId={gafa.id} genere={gafa.gender} params={params.cat}/>
        )}
    </div>
    <img className='bgCategory' src={params.cat == 'man'? manrecortado : (params.cat == 'woman'? womanrecortado : undefined)}/>
    </>
		)
}