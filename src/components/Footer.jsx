import Ellogo from '../assets/img/elLogo.png'
import { UnLink } from './UnLink'

export function Footer() {
  return (
    <footer>
      <div>
        <UnLink seccion='/'><img className='logo' src={Ellogo} alt='La Gafa Logo'/></UnLink>
        <UnLink seccion='/man' titleSeccion='Hombre'/>
        <UnLink seccion='/woman' titleSeccion='Mujer'/>
        <UnLink seccion='/recently-viewed' titleSeccion='Vistos recientemente'/>
        <div className='th'></div>
        Derechos Reservados 2026<br/>
        Designed by <a href='https://github.com/dabicho88' target='_blank'>github.com/dabicho88</a>
      </div>

      <div>
        <form>
          <label for='newsGafas'>Suscríbete al Newsletter para enterarte de los nuevos productos antes que nadie.</label>
          <input type='email' id='newsGafas' placeholder='usuario@dominio.com'/>
          <button>ENVIAR</button>
        </form>
      </div>
    </footer>

    )  
}

