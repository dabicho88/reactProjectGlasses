import { useState, useContext } from 'react'
import { ContextoGlass } from './ContextoGlass'

export function Counter(props){
    const valorEnContexto = useContext(ContextoGlass)


            class UnaGafa{
                constructor(suID, cantidad){
                this.suID = suID;
                this.cantidad = cantidad;
                }
            }
    let gafaSeleccionada
    const [contador, setContador] = useState(() =>{

        const iDEncontrado = localStorage.getItem(props.elId)
        let userRecuperadoObjeto
        iDEncontrado !== null? userRecuperadoObjeto = JSON.parse(iDEncontrado).cantidad : userRecuperadoObjeto = 0
        return userRecuperadoObjeto
    })
    

    const increment = (evi) => {
        const cuentaInmediata = setContador(contador +1)
        evi.stopPropagation();
         valorEnContexto.mostrarenBadge()
         gafaSeleccionada = new UnaGafa(props.elId, contador +1)
         localStorage.setItem(props.elId, JSON.stringify(gafaSeleccionada))
    }

    const decrement = (evi) => {
        const cuentaInmediata = setContador(contador -1)
        evi.stopPropagation();
         valorEnContexto.quitardelBadge()
         const guardaDecremento = contador -1
         gafaSeleccionada = new UnaGafa(props.elId, contador -1)
         guardaDecremento == 0? localStorage.removeItem(props.elId) : localStorage.setItem(props.elId, JSON.stringify(gafaSeleccionada))
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
            ) : null)
            }
                
        </div>
    )
    
}

  