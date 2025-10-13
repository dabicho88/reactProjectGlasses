import { UnLink } from './UnLink'
import ImgCarrito from '../assets/img/carrito.png'
import { useContext } from 'react'
import { ContextoGlass } from './ContextoGlass'

export function Cart(){

    const valueContext = useContext(ContextoGlass)

    return(
        <div className='elCarrito'>
        <UnLink clase='linkCarrito' seccion='/carrito'/>
        <img src={ImgCarrito}/>
        <span style={{display:valueContext.cantidadTotal <= 0? 'none' : 'flex'}}>{valueContext.cantidadTotal}</span>
        </div>
    )
    
}