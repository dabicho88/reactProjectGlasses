import { Header } from './Header'
import { Listcontainer } from './Listcontainer'
import { DetalleGafa } from './DetalleGafa'
import { Footer } from './Footer'
import { Routes, Route } from 'react-router-dom'
import { db } from '../datosFireB'
import { addDoc, collection } from 'firebase/firestore'

function App() {
  return (
    <div className='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<Listcontainer/>}/>
        <Route path='/gafas/:id' element={<DetalleGafa/>}/>
        <Route path='/categoria/:gen' element={<Listcontainer/>}/>
      </Routes>
      <Footer/>
  </div>
  )
}

export default App
