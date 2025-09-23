import ElLogo from '../assets/img/elLogo.png'
import { UnLink } from './UnLink'
import { Carrito } from './Carrito'

export function Header() {
  return (
    <header>
      <img src={ElLogo}/>
      <div>
        <UnLink titleSeccion='Catálogo' seccion='/'/>
        <UnLink titleSeccion='Hombre' seccion='/categoria/hombre'/>
        <UnLink titleSeccion='Mujer' seccion='/categoria/mujer'/>
        <UnLink titleSeccion='Unisex' seccion='/categoria/unisex'/>
      </div>
      <Carrito/>
    </header>

    )  
}

