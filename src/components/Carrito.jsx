import {useContext} from 'react'
import {ContextoGafas} from './ContextoGafas'
import Elcart from '../assets/img/carrito.png'
import {UnLink} from './UnLink'


export function Carrito(){

      const elValorContext = useContext(ContextoGafas)

      return(
            <>
            <UnLink seccion='/cart' clase='carritoFix'><img src={Elcart}/><span>{elValorContext.totCart}</span></UnLink>
            </>
            
      )
}
