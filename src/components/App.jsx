import {Header} from './Header'
import {Footer} from './Footer'
import {Carrito} from './Carrito'
import {SectionSlider} from './SectionSlider'
import {SectionBanners} from './SectionBanners'
import {SectionCarouselRate} from './SectionCarouselRate'
import {SectionCategoryList} from './SectionCategoryList'
import {Routes, Route} from 'react-router-dom'
import {useContext, useState} from 'react'
import {ContextoGafas} from './ContextoGafas'


function App() {
  const elValorContext = useContext(ContextoGafas)

  return (
    <div className='main'>  
      <Header/>
      <Carrito/>
      <Routes>
        <Route path='/' element={<><SectionSlider/> <SectionBanners/> {Object.keys(sessionStorage).toString().includes('articulo')? <SectionCarouselRate/> : null}</>}/>
        <Route path='/:cat' element={<SectionCategoryList/>}/>
      </Routes>{/**/}
      <Footer/>
    </div>
  )
}

export default App
