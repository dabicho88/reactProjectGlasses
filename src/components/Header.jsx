import ElLogo from '../assets/img/elLogo.png'
import { UnLink } from './UnLink'
import { Cart } from './Cart'

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
      <Cart/>
    </header>

    )  
}

