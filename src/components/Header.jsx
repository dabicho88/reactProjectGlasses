import ElLogo from '../assets/img/elLogo.png'
import { UnLink } from './UnLink'

export function Header() {
  return (
    <header>
      <img src={ElLogo}></img>
      <div>
        <UnLink titleSeccion='Catálogo' seccion='/'/>
        <UnLink titleSeccion='Hombre' seccion='/hombre'/>
        <UnLink titleSeccion='Mujer' seccion='/mujer'/>
        <UnLink titleSeccion='Unisex' seccion='/unisex'/>
      </div>
    </header>

    )  
}

