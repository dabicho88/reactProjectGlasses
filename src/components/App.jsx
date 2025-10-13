import { Header } from './Header'
import { Listcontainer } from './Listcontainer'
import { DetalleGafa } from './DetalleGafa'
import { Footer } from './Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<Listcontainer/>}/>
        <Route path='/gafas/:id' element={<DetalleGafa/>}/>
        <Route path='/categoria/:gen' element={<Listcontainer/>}/>
        <Route path='/carrito' element={<Listcontainer/>}/>
      </Routes>
      <Footer/>
  </div>
  )
}

export default App
