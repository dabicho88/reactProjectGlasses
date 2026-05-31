import {ItemList} from './ItemList'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState, useEffect} from 'react'

import 'swiper/css';

export function SectionCarouselRate(){

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
    <h2>Últimos Vistos</h2>
		<Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        modules={[]}
        className="mySwiper swiperCustomGallery"
      >
        {listLentes.filter(gafa => 
          sessionStorage.getItem(`articulo-${gafa.id}`) !== null
          )
        .map(gafa => 
          <SwiperSlide>
            <ItemList key={gafa.id} laImagen={gafa.img} eltitulo={gafa.title_name} elPrecio={gafa.price} elId={gafa.id}/>
          </SwiperSlide>
          )
        }
        
      </Swiper>
      </>
		)
}