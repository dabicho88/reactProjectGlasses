import Ellogo from '../assets/img/elLogo.png'
import { UnLink } from './UnLink'

export function Header() {
  return (
    <header>
      <UnLink seccion='/'><img className='logo' src={Ellogo} alt='La Gafa Logo'/></UnLink>
      <UnLink seccion='/man' titleSeccion='Hombre' clase='linkVertical'/>
      <UnLink seccion='/woman' titleSeccion='Mujer' clase='linkVertical'/>
    </header>
    )   
}

