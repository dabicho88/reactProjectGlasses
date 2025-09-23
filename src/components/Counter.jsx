import { useState, useContext } from 'react'
import { ContextoGlass } from './ContextoGlass'

export function Counter(){
    const valorEnContexto = useContext(ContextoGlass)

    const [contador, setContador] = useState(0)


    const increment = () => {
        const cuentaInmediata = setContador(contador +1)
         valorEnContexto.mostrarenBadge(contador +1)
    }

    const decrement = () => {
        const cuentaInmediata = setContador(contador -1)
         valorEnContexto.quitardelBadge(contador +1)
    }

    return(
        <div className='addtoCart'>
            {contador == 0 ? <span className='add1' onClick={increment}>Agregar</span> : 
            (contador > 0 ? (
             <div  className='controlCounter'>
                <span className='butCount' onClick={decrement}>-</span>
                    <span className='totalItems'>{contador}</span>
                <span className='butCount' onClick={increment}>+</span>
            </div>
            ) : null)}
                
        </div>
    )
    
}