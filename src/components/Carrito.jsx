import {useContext, useEffect, useState} from 'react'
import {ContextoGafas} from './ContextoGafas'
import Elcart from '../assets/img/carrito.png'
import {UnLink} from './UnLink'


export function Carrito(){

      const [claseCambia, setclaseCambia] = useState('')

      const elValorContext = useContext(ContextoGafas)

      useEffect(()=>{
            setclaseCambia('claseCambia')

            const cambia = setTimeout(()=>{
            setclaseCambia('')
      },100)
            return () => clearTimeout(cambia)
      },[elValorContext.totCart])

      return(
            <>
            <UnLink seccion='/cart' clase='carritoFix'><img src={Elcart}/><span className={`${claseCambia}`}>{elValorContext.totCart}</span></UnLink>
            </>
            
      )
}
