import { Header } from './Header'
import { Listcontainer } from './Listcontainer'
import { ListcontainerH } from './ListcontainerH'
import { ListcontainerM } from './ListcontainerM'
import { ListcontainerU } from './ListcontainerU'
import { DetalleGafa } from './DetalleGafa'
import { Footer } from './Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Listcontainer/>}/>
        <Route path='/gafas/:id' element={<DetalleGafa/>}/>
        <Route path='/hombre' element={<Listcontainer/>}/>
        <Route path='/mujer' element={<Listcontainer/>}/>
        <Route path='/unisex' element={<Listcontainer/>}/>
      </Routes>
      <Footer/>
  </div>
  )
}

export default App
